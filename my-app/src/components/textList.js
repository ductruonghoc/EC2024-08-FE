import React from "react";
import '../assets/css/list.css'

const TextList = ({ list }) => {
    return (
        <div>
            {list.map((element) => (
                <div>{element}</div>
            ))}
        </div>
    );
}

export default TextList;