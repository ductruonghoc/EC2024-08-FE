import React from 'react';
import BranchComponent from '../components/branch';
import ContactInfo from '../components/contact';
import '../assets/css/header.css'

const Header = ({tag, contactShow = true}) => {
    return (
      <div className="row header">
        <BranchComponent tag={tag} />
        {contactShow && <ContactInfo/>}
        {/* Add any other components or content you want in the header */}
      </div>
    );
  };
  
  export default Header;