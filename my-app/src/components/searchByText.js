import React, { useState } from "react";
import { useEffect } from "react";
import SearchBar from "./searchBar";
import SearchButton from "./searchButton";
import BackButton from '../components/backButton';

const SearchByText = ({ showSearchBar = true, setKey, action, searchSide, setOtherMethod = [], setShowSearchBar}) => {
    const [searchKey, setSearchKey] = useState('');
    const [suggest, setSuggest] = useState(searchSide(''));
    const [suggestDisplay, setSuggestDisplay] = useState(false);
    const [buttonAction, setButtonAction] = useState(() => () => {});

    const TextSearch = (k) => {
        // Char add to input field
        if (k.length > searchKey.length && suggest.length > 0) {
            console.log(suggest)
            const filteredSuggestions = suggest.filter((i) => i.includes(k));
            setSuggest(filteredSuggestions);
        }

        // Char remove from input field
        if (k.length < searchKey.length) {
            setSuggest(searchSide(k));
        }

        setSearchKey(k);
    };

    useEffect(() => {
        const DisplaySearchBar = () => {
            setOtherMethod.forEach((e) => {
                e(false)
            })
            setShowSearchBar(true)
        }
        const ToggleSearch = () => {
            return action;
        };
        if (showSearchBar) {
            setButtonAction(() => () => ToggleSearch)
        }
        else {
            setButtonAction(() => () => DisplaySearchBar)
        };
    }, [showSearchBar, suggest, action, setOtherMethod, setShowSearchBar]);

    useEffect(() => {
        if (searchKey.length > 2) {
            setSuggestDisplay(suggest.length > 0 ? suggest : false);
        } else {
            setSuggestDisplay(false);
        }
    }, [searchKey, suggest]);

    return (
        <>
            {showSearchBar && <SearchBar inputValue={searchKey} setInputValue={setSearchKey} handleChange={(e) => TextSearch(e.target.value)} changeResult={suggestDisplay} />}
            <SearchButton onClick={buttonAction()} />
            {showSearchBar && <BackButton />}
        </>
    );
}

export default SearchByText;