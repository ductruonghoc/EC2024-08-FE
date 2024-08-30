import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import BackIcon from "../assets/svg/back.svg"
import IconButton from "./iconButton";
import NextIcon from "../assets/svg/next.svg"
import "../assets/css/navigator.css"
import defaultAvatar from "../assets/img/OIG3.jpg"

const Navigator = ({ className = "nav myNav", items = [], isExpand = false, setExpand = null }) => {
    const [sizeChangeIcon, setSizeChangeIcon] = useState(BackIcon);
    const account = items.filter(e => e.type === "account")?.[0] 
    const offCanvas = items.filter(i => i.type === "offCanvas");
    useEffect(() => {
        if (isExpand)
            setSizeChangeIcon(NextIcon)
        else
            setSizeChangeIcon(BackIcon)
    }, [isExpand])

    return (
        <ul className={`${className} overflow-hidden`}>
            <li className="nav-item">
                <div className="nav-link item">
                    <div className={isExpand ? "container-fluid horizontal-flex-start" : ""}>
                        <IconButton
                            svg={sizeChangeIcon}
                            handleOnClick={() => {
                                setExpand(!isExpand)
                            }}></IconButton>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <div className="nav-link item container-fluid">
                    <div className="container-fluid p-1 d-flex flex-column align-items-center">
                        <img
                            src={account?.src ? account?.src : defaultAvatar}
                            className={`${isExpand ? "col-9" : "col-12"} rounded-4 img-thumbnail`} alt="account" />
                        {isExpand && <p>{account?.name ? account?.name : "Guest"}</p>}
                    </div>
                </div>
            </li>
            {
                offCanvas.length > 0 ?
                offCanvas.map((i, idx) => (
                    <li className="nav-item" key={idx}>
                        <div
                            className="nav-link item"
                            onClick={i["action"]}>
                            <IconButton svg={i["icon"]}></IconButton> {isExpand && <div className="navItem--describe">{i["describe"]}</div>}
                        </div>
                    </li>
                )) :
                <></>
            }
            {
                items.map((e, i) => (
                    <li className="nav-item" key={i}>
                        {(e["type"] === "link") &&
                            <NavLink
                                to={e["path"]}
                                className={nav => (nav.isActive ? "nav-link item nav--item--active" : "nav-link item")}>
                                <IconButton svg={e["icon"]}></IconButton> {isExpand && <div className="navItem--describe">{e["describe"]}</div>}
                            </NavLink>
                        }
                    </li>
                ))
            }
        </ul>
    );
}

export default Navigator;