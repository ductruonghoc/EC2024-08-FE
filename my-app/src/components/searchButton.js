import React from 'react';
import '../assets/css/search.css'

const SearchButton = ({onClick}) => {
  return (
    <div className="searchButton" onClick={onClick}>
      <div className="icon">
        <img src="resources/svg/search.svg" alt="Search icon" />
      </div>
    </div>
  );
};

export default SearchButton;
