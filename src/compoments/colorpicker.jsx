import React, {useState, useEffect} from 'react';
import { HexColorPicker } from 'react-colorful';
import './colorpicker.scss';

let colours =[]; //** ! An array of all the selected colours from the color picker
let alfa = ["#a", "#b", "#c", "#d", "#e", "#f","#8"] ;
//Todo Improve the alfa array - There are some colors that are not working properly with theming contrast

//** */ an array of all first 2 characters of hex colour to be used to change the app theme

const ColorPicker = () => {
  const [color, setColor] = useState('#1d5e9f'); //** Background colour of the app
  const [current, setCurrent] = useState([]); //* -> '#hex' , '#hex' , ...
  //** */ An array of selected colours from the color picker - We gonna add these colors to clipboard
  const[theme, setTheme] = useState('colorLight');
  //* By default the app theme is light due the color picker selected is dark (Contrast)

  function copyToClipboard(){
    navigator.clipboard.writeText(color); //** Copy the selected color to clipboard
    alert(`${color} copied to clipboard`); //** Alert the user that the color has been copied to clipboard
  }

  function copyListToClipboard(){
    navigator.clipboard.writeText(current) //* Copy whole list
    alert('copied to clipboard');
  }
  
  function handleColorsList(){
    if(colours.includes(color)){ //* Prevent duplicates
      alert('Color already in list');
    }else{
      setCurrent(colours);
      colours.push(color);
    }
  }
  useEffect(() => { // theming the app
    if (theme === 'colorDark') {
      document.documentElement.style.setProperty("--color", "#232327");
      document.documentElement.style.setProperty("--border", "#232327");
      document.documentElement.style.setProperty("--text", "#232327");
      document.documentElement.style.setProperty("--bg", "#dedfd");

    } else {
      document.documentElement.style.setProperty("--color", "#fff");
      document.documentElement.style.setProperty("--border", "#fff");
      document.documentElement.style.setProperty("--text", "#fff");
      document.documentElement.style.setProperty("--bg", "#fff");
    }
  }, [theme]);
  return(
    //div receives the current color from the color picker as background
    <div className="container" style={{ background: `${color}` }}>

    <h1>Color Picker</h1> 
    <div className="grid">

    <HexColorPicker
     color={color}
     onChange={(color)=>{
          setColor(color); //** */ set the current color to background
          alfa.includes(color.slice(0,2)) ? setTheme('colorDark') : setTheme('colorLight');
          
        }}/>
   
    <div className="list">
    //* map the current array to the list
    <ul>
    {current.map((currentItem,i)=>( 
      <div key={i}>{currentItem}</div>
    )
    )}
    </ul>
    </div>
    </div>
    <h1>Current color is ... {color}</h1>
    <div className="wrapper">
    <button
          onClick={() => {
            copyToClipboard()
          }}
          className="btn"
        >
          Add to Clipboard
        </button>
        <button
          onClick={() => {
            handleColorsList();
            setColor();
            //console.log(current)
          }}
          className="btn"
        >
          Add to list
        </button>
        
        <button
          onClick={() => {
            copyListToClipboard();
          }}
          className="btn"
        >
          Copy the list
        </button>
    </div>
    </div>
  )
}

export default ColorPicker;
