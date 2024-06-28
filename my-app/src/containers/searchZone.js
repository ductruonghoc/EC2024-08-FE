import React, { useState } from 'react';
import FilterList from '../components/filterList';
import SearchByText from '../components/searchByText';
import '../assets/css/search.css'

const SearchZone = ({ items, setResult, action, firstAdapt }) => {
  const [showFilterList, setShowFilterList] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const DisplaySearchBar = () => {
      setShowFilterList(false);
      setShowSearchBar(true);
  };

  return (
      <div className="row visible">
          <SearchByText
              showSearchBar={showSearchBar}
              setKey={setResult}
              action={action}
              searchSide={firstAdapt}
              
          />
          {showFilterList && <FilterList items={items} />}
      </div>
  );
};

export default SearchZone;