import React, { useState } from "react";
import { useEffect } from "react";
import SearchBar from "./searchBar";
import SearchButton from "./searchButton";
import BackButton from '../components/backButton';

import removeVietnameseTones from "../assets/pureJS/removeVienameseTone";

const SearchByText = ({ showSearchBar = true, setKey, action, searchSide, setOtherMethod = [], setShowSearchBar}) => {
    const [searchKey, setSearchKey] = useState('')
    const [suggest, setSuggest] = useState(searchSide(''))
    const [suggestDisplay, setSuggestDisplay] = useState(false)
    const [buttonAction, setButtonAction] = useState(() => () => { })
    const [poolRemain, setPoolRemain] = useState(true)
    const [fetchDataNeed, setFetchDataNeed] = useState(poolRemain)

    const HideSearchBar = () => {
        setOtherMethod.forEach((e) => e(true))
        return setShowSearchBar(false)
    }

    const TextSearch = (k) => {
        //Decrease in search field or telex replace char on type
        setFetchDataNeed(k.length < searchKey.length || removeVietnameseTones(k) === removeVietnameseTones(searchKey))

        if (fetchDataNeed) {
            setSuggest(searchSide(k))
            setPoolRemain(suggest.length === 25)
        }
        // Still can search with suggest
        else if (suggest.length > 0) {
            const filteredSuggestions = suggest.filter((i) => i["text"].includes(k))
            setSuggest(filteredSuggestions)
        }

        setSearchKey(k);
    };
    //Handle Expand/ Narrow This Area
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
    //Handle Suggest Display
    useEffect(() => {
        if (searchKey.length > 2) {
            setSuggestDisplay(suggest.length > 0 ? suggest : false);
        } else {
            setSuggestDisplay(false);
        }
    }, [searchKey, suggest]);

    return (
        <>
            {showSearchBar &&
                <SearchBar
                    inputValue={searchKey}
                    setInputValue={setSearchKey}
                    handleChange={(e) => TextSearch(e.target.value)}
                    changeResult={suggestDisplay} />}
            <SearchButton onClick={buttonAction()} />
            {showSearchBar &&
                <BackButton
                    onClick={HideSearchBar} />}
        </>
    );
}

export default SearchByText;