import React from "react";
import "../assets/css/line.css"

const Line = ({elementStyle = "", type="solid"}) => {

    return (
        <>
            {type === "solid" && <div className={`solidLine ${elementStyle}`}></div>}
            {type === "blur" && <div className={`blurLine ${elementStyle}`}></div>}
        </>
    );
}

export default Line;