import React, { useState } from 'react';
import FilterList from '../components/filterList';
import SearchByText from '../components/searchByText';
import '../assets/css/search.css'

const SearchZone = ({ items, setResult, action, firstAdapt }) => {
    const [showFilterList, setShowFilterList] = useState(true);
    const [showSearchBar, setShowSearchBar] = useState(false);

    return (
        <div className="row visible iba-group">
            <SearchByText
                showSearchBar={showSearchBar}
                setKey={setResult}
                action={action}
                searchSide={firstAdapt} 
                setShowSearchBar={setShowSearchBar}
                setOtherMethod={[setShowFilterList]}/>
            {showFilterList && <FilterList items={items} />}
        </div>
    );
};

export default SearchZone;