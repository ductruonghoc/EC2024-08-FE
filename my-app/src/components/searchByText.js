import React from "react";
import SearchBar from "./searchBar";
import SearchButton from "./searchButton";

const SearchByText = ({ showSearchBar = true, inputValue, setInputValue, handleChange, changeResult, action}) => {
    return (
        <div>
            {showSearchBar && <SearchBar inputValue={inputValue} setInputValue={setInputValue} handleChange={handleChange} changeResult={changeResult}/>}
            <SearchButton onClick={action} />
        </div>
    );
}

export default SearchByText;