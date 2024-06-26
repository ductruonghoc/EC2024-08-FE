import React, {useState} from 'react';
import FilterList from '../components/filterList';
import SearchButton from '../components/searchButton';
import '../../../assets/css/search.css'
import '../../../assets/css/default.css'

const SearchZone = ({items, handleFilter}) => {
    const [showFilterList, setShowFilterList] = useState(true)
    
    const searchByType = () => {
        setShowFilterList(false)
    }

    return (
      <div className="row search">
        {showFilterList && <SearchBar/>}
        <SearchButton onClick={searchByType}/>
        <FilterList items={items} onItemClick={handleFilter}/>
        <BackButton/>
      </div>
    );
  };
  
  export default SearchZone;