import React from 'react';
import Header from '../../../containers/header';
import { useNavigate } from 'react-router-dom';

const ShopHeader = () => {
    const navigate = useNavigate();
    const DirectHome = () => {
        navigate("/Shop");
    }
    return <div className='coltainer-fluid h-15 p-2'>
        <Header 
            tag="Cửa hàng"
            directHome={() => DirectHome()}/>
    </div>
};
  
export default ShopHeader;