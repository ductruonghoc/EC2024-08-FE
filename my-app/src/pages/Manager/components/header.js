import React from 'react';
import Header from '../../../containers/header';

const ManagerHeader = () => {
    return <div className='coltainer-fluid h-15 p-2'>
        <Header tag="Quản lý" contactShow={false} />
    </div >
};

export default ManagerHeader;