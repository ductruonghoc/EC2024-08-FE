import React from 'react';
import Header from '../../../containers/header';

const StaffHeader = () => {
    return <div className='coltainer-fluid h-15 p-2'>
        <Header tag="Nhân viên" contactShow={false} />
    </div >
};

export default StaffHeader;