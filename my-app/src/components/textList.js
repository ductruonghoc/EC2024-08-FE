import React from "react";
import '../assets/css/list.css'

const TextList = ({list}) => {
    return (
        <div className="textList">
            {list.forEach((element) => {
                <span>
                    <div className="highlight">element["highlight"]</div>
                    <div>element["text"]</div>
                </span>
            })}
        </div>
    )
}

export default TextList;