import React from "react";
import { Outlet } from "react-router-dom";
import '../assets/css/layout.css';
import { StaffHeader, StaffNavigator } from "../pages/Staff";
import { useState, useEffect } from "react";

const StaffLayout = () => {
    const [navExpand, setNavExpand] = useState(false)
    const [columnStyle, setColumnStyle] = useState(["col-11", "col-1"])

    useEffect(() => {
        if (navExpand)
            setColumnStyle(["col-10", "col-2"])
        else
            setColumnStyle(["col-11", "col-1"])
    }, [navExpand])

    return (
        <div className="container-fluid">
            <div className='row'>
                <div className={columnStyle[0]}>
                    <StaffHeader></StaffHeader>
                    <main className="staffMain">
                        <Outlet />
                    </main>
                </div>
                <div className={columnStyle[1]}>
                    {navExpand && <div className="cover"></div>}
                    <StaffNavigator
                        isExpand={navExpand}
                        setExpand={setNavExpand}
                        elementStyle="flex-column noWrap black"></StaffNavigator>
                </div>
            </div>
        </div>
    )
}

export default StaffLayout;