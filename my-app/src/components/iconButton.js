import React from "react";

const IconButton = ({handleOnClick, svg}) => {
    return (<div class="clickable" onClick={handleOnClick}>
        <img src={svg}></img>
    </div>)
}

export default IconButton;