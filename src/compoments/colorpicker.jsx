import React, {useState} from 'react'
import { HexColorPicker } from "react-colorful";
import copy from "copy-to-clipboard";
import './colorpicker.scss';


const ColorPicker = () => {
    const [color, setColor] = useState("#28537f");    
  return (
 <div className="container" style={{background:`${color}`}}>
      <h1>Color Picker</h1>
      <HexColorPicker color={color} onChange={setColor} />
      <h1>Current color is {color}</h1>
   </div>

  )
}

export default ColorPicker