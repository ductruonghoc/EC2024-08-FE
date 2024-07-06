import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import BackIcon from "../assets/svg/back.svg"
import IconButton from "./iconButton";
import NextIcon from "../assets/svg/next.svg"
import "../assets/css/navigator.css"

const Navigator = ({ className = "nav myNav", items = [], isExpand = false, setExpand = null }) => {
    const [sizeChangeIcon, setSizeChangeIcon] = useState(BackIcon)

    useEffect(() => {
        if (isExpand)
            setSizeChangeIcon(NextIcon)
        else
            setSizeChangeIcon(BackIcon)
    }, [isExpand])

    return (
        <ul className={className}>
            <li className="nav-item">
                <div className="nav-link item">
                    <div className={isExpand ? "horizontal-flex-start" : ""}>
                        <IconButton
                            svg={sizeChangeIcon}
                            handleOnClick={() => {
                                console.log(1)
                                setExpand(!isExpand)
                            }}></IconButton>
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