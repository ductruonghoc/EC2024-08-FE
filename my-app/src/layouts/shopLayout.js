// Layout.js
import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet} from 'react-router-dom';
import ShopHeader from '../pages/Shop/components/header';
import '../assets/css/layout.css'
import { ShopNavigator } from '../pages/Shop';
const ShopLayout = () => {
    const [navExpand, setNavExpand] = useState(false);
    const [columnStyle, setColumnStyle] = useState(["col-11", "col-1"]);
    useEffect(() => {
        if (navExpand)
            setColumnStyle(["col-10 p-0", "col-2 p-0"])
        else
            setColumnStyle(["col-11 p-0", "col-1 p-0"])
    }, [navExpand]);

    return (
        <div className='container-fluid overflow-x-hidden'>
            <div className='row'>
                <div className={columnStyle[0]}>
                    <ShopHeader />
                    <main className='shopMain'>
                        <Outlet />
                    </main>
                </div>
                <div className={`${columnStyle[1]} position-relative z-1`}>
                    {navExpand && <div className="container-fluid cover"></div>}
                    <ShopNavigator 
                        isExpand={navExpand}
                        setExpand={setNavExpand}
                        elementStyle="flex-column noWrap"></ShopNavigator>
                </div>
            </div>
        </div>
    );
}

export default ShopLayout;
