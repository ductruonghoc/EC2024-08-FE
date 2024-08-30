import React from "react";

import "../assets/css/button.css"

const RoundButton = ({ onClick = null, svg = undefined, custom = ""}) => {
    return (
        <div
            className={`roundButton ${custom}`}
            onClick={onClick}>
            <img
                src={svg}
                alt={"icsvg"} />
        </div>
    );
};

export default RoundButton;
