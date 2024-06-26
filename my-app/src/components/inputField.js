import React, { useState } from "react";
import '../assets/css/input.css';

const InputField = ({ placeholder, ariaLabel, value, setValue}) => {
    const handleChange = (e) => {
        return setValue(e.target.value);
    }

    return (
        <input
            type="text"
            className="myInput"
            placeholder={placeholder}
            aria-label={ariaLabel}
            aria-describedby="addon-wrapping"
            value={value}
            onChange={handleChange} // Attach the event listener
        />
    );
}

export default InputField;