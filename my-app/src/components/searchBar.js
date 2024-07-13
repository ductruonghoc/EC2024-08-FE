import React from "react";
import '../assets/css/search.css'
import InputComponent from "./inputComponent";

const SearchBar = ({ inputValue, setInputValue, handleChange, changeResult }) => {
    return (
        <div className="searchBar">
            <InputComponent
                placeholder={"Từ khóa tìm kiếm..."}
                ariaLabel={"SearchText"}
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleChange={handleChange}
                changeResult={changeResult}/>
        </div>
    );
}

export default SearchBar;