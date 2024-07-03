import React from "react";
import { NavLink } from "react-router-dom"
import BackButton from "./backButton";
import "../assets/css/navigator.css"

const Navigator = ({ className = "nav myNav", items = [] }) => {

    return (
        <ul className={className}>
            <li className="nav-item">
                <div className="nav-link item">
                    <BackButton onClick={null}></BackButton>
                </div>
            </li>
            {
                items.map((e, i) => (
                    <li className="nav-item" key={i}>
                        <NavLink
                            to={e["path"]}
                            className={nav => (nav.isActive ? "nav-link item nav--item--active" : "nav-link item")}>{e["view"]}</NavLink>
                    </li>
                ))
            }
        </ul>
    );
}

export default Navigator;