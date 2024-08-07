import React, { useState } from "react";
import { useEffect } from "react";
import SearchBar from "./searchBar";
import SearchButton from "./searchButton";
import BackButton from '../components/backButton';
import { useNavigate } from "react-router-dom";

const SearchByText = ({ showSearchBar = true, action, setOtherMethod = [], setShowSearchBar}) => {
    const [searchKey, setSearchKey] = useState('')
    const [buttonAction, setButtonAction] = useState(() => () => { })
    const navigate = useNavigate()
    const HideSearchBar = () => {
        setOtherMethod.forEach((e) => e(true))
        return setShowSearchBar(false)
    }

    const TextSearch = (k) => {
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
            navigate(`/Shop/0/${searchKey}`)
            return setSearchKey('');
        };
        if (showSearchBar) {
            setButtonAction(() => () => ToggleSearch)
        }
        else {
            setButtonAction(() => () => DisplaySearchBar)
        };
    }, [showSearchBar, setOtherMethod,searchKey, setShowSearchBar, navigate]);
    //Handle Suggest Display

    return (
        <>
            {showSearchBar &&
                <SearchBar
                    inputValue={searchKey}
                    setInputValue={setSearchKey}
                    handleChange={(e) => TextSearch(e.target.value)} />}
            <SearchButton onClick={buttonAction()} />
            {showSearchBar &&
                <BackButton
                    onClick={HideSearchBar} />}
        </>
    );
}

export default SearchByText;