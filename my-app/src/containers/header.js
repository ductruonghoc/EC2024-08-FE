import React from 'react';
import BranchComponent from '../components/branch';
import ContactInfo from '../components/contact';
import '../assets/css/header.css'

const Header = ({ tag, contactShow = true }) => {
  return (
    <div className="container-fluid d-inline-flex align-items-center justify-content-between h-100">
      <div className='h-100 w-30'>
        <BranchComponent tag={tag} />
      </div>
      {contactShow && <ContactInfo />}

      {/* Add any other components or content you want in the header */}
    </div>
  );
};

export default Header;