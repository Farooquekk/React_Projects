import { useState } from "react"


function ColorPicker() {
    const [color, setColor] = useState('#FFFFFF');

    const handleColor = (e) => {
        setColor(e.target.value);
    }
    return (
      
        <div className="container">
            <h1>Your Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected Color : { color}</p>
            </div>
            <label>Select a Color </label>
            <input type="color" value={color} onChange={handleColor}></input>

    </div>
  )
}

export default ColorPicker