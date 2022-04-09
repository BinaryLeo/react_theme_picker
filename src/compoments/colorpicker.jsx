import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import './colorpicker.scss'
let lista = []
const ColorPicker = () => {
  const [color, setColor] = useState('#1d5e9f') //* useState to change the baksground color
  const [current, setCurrent] = useState([]) //* useState to add color to the list

  function copyToClipboard() {
    //* add to clipboard
    navigator.clipboard.writeText(color) //* copy a single color
    alert(`${color} copied to clipboard`)
  }
  function copyListToClipboard() {
    //* add to clipboard
    navigator.clipboard.writeText(current) //* copy whole list
    alert('copied to clipboard')
  }
  function handleColorsList() {
    if (lista.includes(color)) {
      alert('Color already in the list')
    } else {
      setCurrent(lista)
      lista.push(color)
    }
  }
  /*
   * 1. Returns the current color to background
   * 2. onclick add the selected color to the list
   * 3. Map the colours list and dynamically add the color to the <li> element
   * 4.Copy the whole list to clipboard
   */
  return (
    <div className="container" style={{ background: `${color}` }}>
      <h1>Color Picker</h1>
      <div className="grid">
        <HexColorPicker color={color} onChange={setColor} />
        <div className="list">
          <ul className="items">
            {current.map((currentItem, i) => (
              <div key={i}> {currentItem} </div>
            ))}
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
            console.log(current)
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

export default ColorPicker
