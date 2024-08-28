import React from 'react';
import BranchComponent from '../components/branch';
import ContactInfo from '../components/contact';
import '../assets/css/header.css'

const Header = ({ tag, directHome, contactShow = true }) => {
  return (
    <div className="container-fluid d-inline-flex align-items-center justify-content-between h-100">
      <div
        className='h-100 w-30'
        onClick={() => directHome()}
        style={{cursor: "pointer"}}>
        <BranchComponent tag={tag} />
      </div>
      {contactShow && <ContactInfo />}
    </div>
  );
};

export default Header;