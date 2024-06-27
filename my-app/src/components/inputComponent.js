import React, { useState } from "react";
import DeleteButton from "./deleteButton";
import InputField from "./inputField";
import SuggestText from "./suggestText";
import "../assets/css/input.css"

const InputComponent = ({ placeholder, ariaLabel, inputValue, setInputValue, handleChange, changeResult }) => {
    const setInput = (v) => {
        return setInputValue(v);
    }

    return (
        <div className="inputComponent">
            <InputField placeholder={placeholder} ariaLabel={ariaLabel} value={inputValue} setValue={setInputValue} handleChange={handleChange}></InputField>
            <div className="inputClear">
                <DeleteButton handleOnClick={() => setInput('')}></DeleteButton>
            </div>
            {haveSuggest &&
                <div className="suggestZone">
                    <SuggestText key={inputValue} suggest={changeResult["suggest"]}></SuggestText>
                </div>
            }
        </div>
    );
}

export default InputComponent;