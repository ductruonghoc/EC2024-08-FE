import React from 'react';
import '../assets/css/search.css';
import searchIcon from '../assets/svg/search.svg';
import RightBorderButton from './rightBorderButton';

const SearchButton = ({onClick}) => {
  return <RightBorderButton onClick={onClick} svg={searchIcon}></RightBorderButton>;
};

export default SearchButton;
