import React from 'react';
import BranchComponent from '../components/branch';
import ContactInfo from '../components/contact';
import '../assets/css/header.css'

const Header = ({tag}) => {
    return (
      <div className="row header">
        <BranchComponent tag={tag} />
        <ContactInfo/>
        {/* Add any other components or content you want in the header */}
      </div>
    );
  };
  
  export default Header;