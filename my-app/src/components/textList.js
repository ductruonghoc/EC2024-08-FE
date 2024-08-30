import React from "react";

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