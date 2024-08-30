import React from "react";

const IconButton = ({handleOnClick = null, svg}) => {
    return (<div className="clickable" onClick={handleOnClick}>
        <img src={svg} alt={"icsvg"}></img>
    </div>)
}

export default IconButton;