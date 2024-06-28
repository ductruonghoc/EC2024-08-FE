// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import ShopHeader from '../pages/Shop/components/header';
import '../assets/css/layout.css'

function Layout() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-11'>
                    <ShopHeader />
                    <main className='shopMain'>
                        <Outlet /> {/* Renders nested components */}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Layout;
