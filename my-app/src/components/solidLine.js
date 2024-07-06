import React from "react";
import "../assets/css/line.css"

const SolidLine = ({elementStyle = ""}) => {
    return (
        <div className={`solidLine ${elementStyle}`}></div>
    );
}

export default SolidLine;