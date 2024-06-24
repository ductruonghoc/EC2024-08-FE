import React from 'react';
import '../assets/css/branch.css';
import logo from '../assets/svg/logo.svg'

const BranchComponent = ({tag}) => {
  return (
    <div className="branch">
      <div className="logo">
        <img src={logo} alt="Branch Logo" />
      </div>
      <div className="tag">{tag}</div>
    </div>
  );
};

export default BranchComponent;