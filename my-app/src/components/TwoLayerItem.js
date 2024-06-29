import React from "react";

const TwoLayerItem = ({src}) => {
    return (
        <div className="item">
            <img src={src} loading="lazy"></img>
        </div>
    );
}

export default TwoLayerItem;