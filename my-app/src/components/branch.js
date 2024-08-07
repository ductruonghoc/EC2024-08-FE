import React from 'react';
import '../assets/css/branch.css';
import logo from '../assets/svg/logo.svg'

const BranchComponent = ({tag = ""}) => {
  return (
    <div className={`container-fluid position-relative d-inline-flex ${tag.length === 0 ? 'justify-content-center' : ''}`}>
      <img src={logo} alt="Branch Logo" className={`img-fluid`} style={{width: `${tag.length === 0 ? 400 : 250}px`}}/>
      <div className="h4 fw-bolder top-30 align-self-end pb-3">{tag}</div>
    </div>
  );
};

export default BranchComponent;