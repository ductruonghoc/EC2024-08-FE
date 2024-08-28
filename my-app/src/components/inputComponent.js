import React from "react";
import DeleteButton from "./deleteButton";
import InputField from "./inputField";
import SuggestLink from "./suggestLink";
import "../assets/css/input.css"

const InputComponent = ({ placeholder, ariaLabel, inputValue, setInputValue, handleChange, enterAction, changeResult = false}) => {
    return (
        <div className="inputComponent">
            <InputField placeholder={placeholder} ariaLabel={ariaLabel} value={inputValue} setValue={setInputValue} handleChange={handleChange} enterAction={enterAction}></InputField>
            <div className="inputClear">
                <DeleteButton handleOnClick={() => setInputValue('')}></DeleteButton>
            </div>
            {changeResult !== false &&
                <div className="suggestZone textList">
                    <SuggestLink list={changeResult}/>
                </div>
            }
        </div>
    );
}

export default InputComponent;