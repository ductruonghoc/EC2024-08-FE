import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import '../assets/css/layout.css';
import { ManagerHeader, ManagerNavigator } from "../pages/Manager";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetClient } from "../store/action/client_info";
import nothingToShowBackground from "../assets/img/8669689.jpg";
import fetching from "../services";
import { Spinner } from "react-bootstrap";
const ManagerLayout = () => {
    const [navExpand, setNavExpand] = useState(false);
    const [columnStyle, setColumnStyle] = useState(["col-11", "col-1"]);
    const [token, setToken] = useState('');
    const dispatch = useDispatch();
    const client = useSelector(state => state.clientInfo);
    useEffect(() => {
        if (navExpand)
            setColumnStyle(["col-10", "col-2"])
        else
            setColumnStyle(["col-11", "col-1"])
    }, [navExpand])//Expand/ Narrow Nav
    useEffect(() => {
        if (token.length === 0) {
            return;//Basecase
        }
        const option = {
            headers: {
                Authorization: `Bearer ${token}`
            }, //tell the object content form
        };
        fetching(
            "api/user/profile",
            option
        ).then(result => dispatch(SetClient({ ...result, token: token }))) //Set receving profile
            .catch(() => {
                localStorage.removeItem('AuthToken');
                alert("Vui lòng đăng nhập lại");
            });
    }, [token, dispatch])//Token handler
    useEffect(() => {
        const cacheToken = localStorage.getItem('AuthToken');
        if (cacheToken !== null) {
            setToken(cacheToken);
        }
    }, [setToken])//Check in the cache

    return (<div className="container-fluid" >
        <Suspense fallback={Spinner}>
            {client.role === "admin" ?
                <div className='row'>
                    <div className={`${columnStyle[0]} p-0`}>
                        <ManagerHeader />
                        <main className="staffMain">
                            <Outlet />
                        </main>
                    </div>
                    <div className={`${columnStyle[1]} p-0 position-relative`}>
                        {navExpand && <div className="cover"></div>}
                        <ManagerNavigator
                            isExpand={navExpand}
                            setExpand={setNavExpand}
                            elementStyle="flex-column noWrap black"></ManagerNavigator>
                    </div>
                </div> :
                <div className="container-fluid">
                    <img
                        className="img-fluid"
                        src={nothingToShowBackground}
                        alt="nothing to show" />
                </div>
            }
        </Suspense>
    </div>
    )
}

export default ManagerLayout;