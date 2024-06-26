import React from 'react';
import '../assets/css/search.css'

const FilterList = ({ items, onItemClick}) => {
    return (
      <div className="filter">
        {items.map((item, index) => (
          <div
            className="item"
            key={index}
            onClick={() => onItemClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    );
  };

export default FilterList;
