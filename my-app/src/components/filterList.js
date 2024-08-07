import React from 'react';

import { NavLink } from 'react-router-dom';

import '../assets/css/search.css'

const FilterList = ({ items}) => {
    return (
      <div className="filter">
        {items.map((item, index) => (
          <div
            className="item"
            key={index}
          >
            <NavLink to={item.path}>
            {item.text}
            </NavLink>
          </div>
        ))}
      </div>
    );
  };

export default FilterList;
