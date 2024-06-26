import React, { useState } from "react";
import DeleteButton from "./deleteButton";
import InputField from "./inputField";
import SuggestText from "./suggestText";
import "../assets/css/input.css"

const InputComponent = ({ placeholder, ariaLabel, inputValue, setInputValue, haveSuggest = false }) => {
    const setInput = (v) => {
        return setInputValue(v);
    }

    return <div className="inputComponent">
        <InputField placeholder={placeholder} ariaLabel={ariaLabel} value={inputValue} setValue={setInputValue}></InputField>
        <div className="inputClear">
            <DeleteButton handleOnClick={() => setInput('')}></DeleteButton>
        </div>
        {haveSuggest &&
            <div className="suggestZone">
                <SuggestText highlight={haveSuggest["highlight"]} text={haveSuggest["text"]}></SuggestText>
            </div>
        }
    </div>;
}

export default InputComponent;