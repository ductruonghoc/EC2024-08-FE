import React from 'react';
import BranchComponent from '../../../components/branch';
import ContactInfo from '../../../components/contact';
import '../../../assets/css/header.css'
import '../../../assets/css/default.css'

const Header = () => {
    return (
      <div className="row header">
        <BranchComponent tag="Cửa hàng" />
        <ContactInfo/>
        {/* Add any other components or content you want in the header */}
      </div>
    );
  };
  
  export default Header;