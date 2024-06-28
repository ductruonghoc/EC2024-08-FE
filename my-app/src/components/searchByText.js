import React, { useState } from "react";
import { useEffect } from "react";
import SearchBar from "./searchBar";
import SearchButton from "./searchButton";
import BackButton from '../components/backButton';

const SearchByText = ({ showSearchBar = true, setKey, action, searchSide}) => {
    const [searchKey, setSearchKey] = useState('');
    const [suggest, setSuggest] = useState('');
    const [suggestDisplay, setSuggestDisplay] = useState(false);
    const [buttonAction, setButtonAction] = useState();

    const TextSearch = (k) => {
        // Char add to input field
        if (k.length > searchKey.length && suggest.length > 0) {
            const filteredSuggestions = suggest.filter((i) => i["name"].includes(k));
            setSuggest(filteredSuggestions);
        }

        // Char remove from input field
        if (k.length < searchKey.length) {
            setSuggest(searchSide(k));
        }

        setSearchKey(k);
    };

    const ToggleSearch = (condition) => {
        if (condition) {
            setKey(suggest);
        } else {
            setKey(false);
        }
        return action;
    };

    useEffect(() => {
        if (showSearchBar) {
            setButtonAction(() => ToggleSearch(suggest.length > 0));
        }
    }, [showSearchBar]);

    useEffect(() => {
        if (searchKey.length > 2) {
            setSuggestDisplay(suggest.length > 0 ? suggest.map((i) => i["name"]) : false);
        } else {
            setSuggestDisplay(false);
        }
    }, [searchKey, suggest]);

    return (
        <div className="iba-group">
            {showSearchBar && <SearchBar inputValue={searchKey} setInputValue={setSearchKey} handleChange={(e) => TextSearch(e.target.value)} changeResult={suggestDisplay} />}
            <SearchButton onClick={buttonAction} />
            {showSearchBar && <BackButton />}
        </div>
    );
}

export default SearchByText;