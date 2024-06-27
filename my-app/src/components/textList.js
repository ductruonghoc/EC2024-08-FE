import React from "react";
import '../assets/css/list.css'

const TextList = ({list}) => {
    return (
        <div className="textList">
            {list.forEach((element) => {
                <span>
                    <div className="bold">element["highlight"]</div>
                    <div>element["normal"]</div>
                </span>
            })}
        </div>
    )
}

export default TextList;