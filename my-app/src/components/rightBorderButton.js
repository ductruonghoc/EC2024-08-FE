import React from 'react';
import IconButton from './iconButton';
import '../assets/css/button.css'

const RightBorderButton = ({onClick, svg}) => {
    return (
      <div className="rightBorderButton">
        <IconButton handleOnClick={onClick} svg={svg}></IconButton>
      </div>
    );
  };

  export default RightBorderButton;