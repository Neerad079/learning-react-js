import React, { useState } from 'react';
function ColorPicker() {

  const [color, setColor] = useState('#FFFFFF');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  }

  return (
    <div className='color-picker-container'>
        <h1 className='color-header'>Color Picker</h1>
        <div className='color-display' style={{ backgroundColor: color }}>
           <p>Selected Color: <p></p>{color}</p>
        </div>
        <label >Select a Color : </label>
        <input className='color-input' type='color' value={color} onChange={handleColorChange}></input>
    </div>
  );
}
export default ColorPicker;