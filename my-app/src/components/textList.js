import React from "react";
import '../assets/css/list.css'

const TextList = ({ list }) => {
    return (
        <div>
            {list.map((element, index) => (
                <div key={index}>{element}</div>
            ))}
        </div>
    );
}

export default TextList;