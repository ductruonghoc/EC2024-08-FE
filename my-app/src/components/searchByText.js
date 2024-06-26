import React from "react";
import SearchBar from "./searchBar";
import SearchButton from "./searchButton";

const SearchByText = ({ showSearchBar = true, inputValue, setInputValue, result, search}) => {
    return (
        <div>
            {showSearchBar && <SearchBar inputValue={inputValue} setInputValue={setInputValue} result={result}/>}
            <SearchButton onClick={search} />
        </div>
    );
}

export default SearchByText;