import React from "react";
import { useState } from "react";
import ItemInformation from "./itemInformation";
import "../assets/css/itemInformation.css"

const TwoLayerItem = ({src, itemName, itemPrice, parentUnit, childUnit, childQuantity, addToCartAction = undefined, itemID = 0 }) => {
    const [upperLayerShow, setUpperLayerShow] = useState(false)
    return (
        <div className="item" onMouseEnter={() => setUpperLayerShow(true)} onMouseLeave={() => setUpperLayerShow(false)}>
            <img src={src} loading="lazy" alt={itemName}></img>
            {upperLayerShow && <ItemInformation
                className="itemInformation twoLayerItem--UpperLayer"
                itemName={itemName}
                itemPrice={itemPrice}
                parentUnit={parentUnit}
                childUnit={childUnit}
                childQuantity={childQuantity}
                addToCartAction={addToCartAction}
                itemID={itemID}></ItemInformation>}
        </div>
    );
}

export default TwoLayerItem;