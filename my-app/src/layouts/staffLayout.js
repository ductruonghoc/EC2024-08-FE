import React from "react";
import { Outlet } from "react-router-dom";
import '../assets/css/layout.css';
import { StaffHeader, StaffNavigator } from "../pages/Staff";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetClient } from "../store/action/client_info";

const StaffLayout = () => {
    const [navExpand, setNavExpand] = useState(false)
    const [columnStyle, setColumnStyle] = useState(["col-11", "col-1"])
    const dispatch = useDispatch()
    const client = useSelector(state => state.clientInfo)
    useEffect(() => {
        if (navExpand)
            setColumnStyle(["col-10", "col-2"])
        else
            setColumnStyle(["col-11", "col-1"])
    }, [navExpand])//Expand/ Narrow Nav

    useEffect(() => {
        const client = JSON.parse(localStorage.getItem('client'))
        if (client)
        {
            dispatch(SetClient(client))
        }
    }, [dispatch]) //Read cache once load to determine display component

    return (<div className="container-fluid" >
        {client.role === 2 &&
            <div className='row'>
                <div className={`${columnStyle[0]} p-0`}>
                    <StaffHeader></StaffHeader>
                    <main className="staffMain">
                        <Outlet />
                    </main>
                </div>
                <div className={`${columnStyle[1]} p-0 position-relative`}>
                    {navExpand && <div className="cover"></div>}
                    <StaffNavigator
                        isExpand={navExpand}
                        setExpand={setNavExpand}
                        elementStyle="flex-column noWrap black"></StaffNavigator>
                </div>
            </div>
        }
    </div>
    )
}

export default StaffLayout;