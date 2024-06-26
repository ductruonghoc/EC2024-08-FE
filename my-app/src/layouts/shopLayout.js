// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import ShopHeader from '../pages/Shop/components/header';

function Layout() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-11'>
                    <ShopHeader/>
                    <main>
                        <Outlet /> {/* Renders nested components */}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Layout;
