import React, { useState } from "react";
import DeleteButton from "./deleteButton";
import InputField from "./inputField";
import SuggestText from "./suggestText";
import "../assets/css/input.css"

const InputComponent = ({ placeholder, ariaLabel, inputValue, setInputValue, handleChange, changeResult }) => {
    return (
        <div className="inputComponent">
            <InputField placeholder={placeholder} ariaLabel={ariaLabel} value={inputValue} setValue={setInputValue} handleChange={handleChange}></InputField>
            <div className="inputClear">
                <DeleteButton handleOnClick={() => setInputValue('')}></DeleteButton>
            </div>
            {changeResult != false &&
                <div className="suggestZone textList">
                    <SuggestText list={changeResult}></SuggestText>
                </div>
            }
        </div>
    );
}

export default InputComponent;