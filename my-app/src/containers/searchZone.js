import React, { useState } from 'react';
import FilterList from '../components/filterList';
import BackButton from '../components/backButton';
import SearchByText from '../components/searchByText';
import '../assets/css/search.css'

const SearchZone = ({ items, result, setResult, action }) => {
  const [showFilterList, setShowFilterList] = useState(true)
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [textSearchResult, setTextSearchResult] = useState({
    "key": "",
    "suggest": "",
    "result": result
  })

  const searchDisplayChange = () => {
    setShowFilterList(false)
    setShowSearchBar(true)
  }

  const [searchButtonAction, setSearchButtonAction] = useState(searchDisplayChange)

  const changeToSearchByText = () => {
    searchDisplayChange()
    setSearchButtonAction(action)
  }

  setSearchButtonAction(changeToSearchByText)

  const handleResultKey = (v) => {
    let r = textSearchResult

    r["key"] = v

    return setTextSearchResult(r)
  }

  const searchByText 

  return (
    <div className="row iba-group">
      <SearchByText showSearchBar={showSearchBar} inputValue={textSearchResult["key"]} setInputValue={() => handleResultKey(v)} handleChange={handleChange} changeResult={changeResult} action={searchButtonAction}></SearchByText>
      {showFilterList && <FilterList items={items} onItemClick={action} />}
      {false && <BackButton />}
    </div>
  );
};

export default SearchZone;