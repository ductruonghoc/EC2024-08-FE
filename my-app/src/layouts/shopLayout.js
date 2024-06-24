// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../pages/Shop';

function Layout() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-11'>
                    <Header></Header>
                    <main>
                        <Outlet /> {/* Renders nested components */}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Layout;
