import React from "react";
import '../assets/css/input.css';

const InputField = ({ placeholder, ariaLabel, value, setValue, enterAction, handleChange = (e) => setValue(e.target.value) }) => {

    return (
        <input
            type="text"
            className="myInput"
            placeholder={placeholder}
            aria-label={ariaLabel}
            aria-describedby="addon-wrapping"
            value={value}
            onChange={handleChange} // Attach the event listener
            onKeyDown={(event) => event.key === 'Enter' && enterAction()}
        />
    );
}

export default InputField;