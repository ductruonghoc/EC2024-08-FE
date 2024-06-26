import React from "react";
import '../assets/css/search.css'
import InputComponent from "./inputComponent";

const SearchBar = ({inputValue, setInputValue, result}) => {
    return <div className="searchBar">
        <InputComponent placeholder={"Từ khóa tìm kiếm..."} ariaLabel={"SearchText"} inputValue={inputValue} setInputValue={setInputValue} haveSuggest={result}></InputComponent>
    </div>
}

export default SearchBar;