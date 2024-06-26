import React, { useState } from 'react';
import FilterList from '../components/filterList';
import BackButton from '../components/backButton';
import SearchByText from '../components/searchByText';
import '../assets/css/search.css'

const SearchZone = ({ items, setCatalog, keyRender, setKeyRender }) => {
  const [showFilterList, setShowFilterList] = useState(true)
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [searchBy, setSearchBy] = useState(() => {
    setShowFilterList(false)
    setShowSearchBar(true)
  })

  const handleSearch = () => { }
  return (
    <div className="row iba-group">
      <SearchByText showSearchBar={showSearchBar} inputValue={keyRender} setInputValue={setKeyRender}
        result={handleSearch} search={searchBy}></SearchByText>
      {showFilterList && <FilterList items={items} onItemClick={setCatalog} />}
      {false && <BackButton />}
    </div>
  );
};

export default SearchZone;