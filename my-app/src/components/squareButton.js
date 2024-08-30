import React from "react";
import "../assets/css/button.css"

const SquareButton = ({onClick = undefined, svg = undefined, custom = ""}) => {
    return (
        <div className={`squareButton ${custom}`} onClick={onClick} >
            <img src={svg} alt={"icsvg"}></img>
        </div >
    );
}

export default SquareButton;