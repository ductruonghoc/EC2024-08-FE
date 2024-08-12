import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import BackIcon from "../assets/svg/back.svg"
import IconButton from "./iconButton";
import NextIcon from "../assets/svg/next.svg"
import "../assets/css/navigator.css"
import defaultAvatar from "../assets/img/OIG3.jpg"

const Navigator = ({ className = "nav myNav", items = [], isExpand = false, setExpand = null }) => {
    const [sizeChangeIcon, setSizeChangeIcon] = useState(BackIcon);
    const avatarIdx = items.findIndex(e => e.type === "avatar");
    const avatar = avatarIdx !== -1 ? items.splice(items.findIndex(e => e.type === "avatar"), 1)[0] : {
        src: defaultAvatar,
        clientName: "Guest",
    };
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
                    <div className= "container-fluid p-1 d-flex flex-column align-items-center">
                        <img 
                        src={avatar.src}
                        class={`${isExpand ? "col-9": "col-12"} rounded-4 img-thumbnail`} alt="avatar"/>
                        {isExpand && <p>{avatar.clientName}</p>}
                    </div>
                </div>
            </li>
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