import React from "react";

import { NavLink } from "react-router-dom";

import '../assets/css/list.css'

const LinkList = ({ list }) => {
    return (
        <div>
            {list.slice(0,5).map((element, index) => (
                <div key={index}>
                    <NavLink to={element["path"]} className="linkList--link" >{element["text"]}</NavLink>
                </div>
            ))}
        </div>
    );
}

export default LinkList;