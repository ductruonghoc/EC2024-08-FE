import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TwoLayerItem from "./TwoLayerItem";
import LeftButton from "./leftButton";
import RightButton from "./rightButton";

const ShortListTLI = ({ items, addToCartAction }) => {
    const [itemOnView, setItemOnView] = useState(items.slice(0, 3))
    const [selectIndex, setSelectIndex] = useState(0)

    useEffect(() => {
        setItemOnView(items.slice(selectIndex, selectIndex + 3))
    }, [selectIndex, items])

    return (
        <div className="list short">
            {(selectIndex > 0) && <LeftButton className="short--leftButton" onClick={() => setSelectIndex(selectIndex - 1)}></LeftButton>}
            {
                itemOnView.map((element, index) => {
                    return (
                        <TwoLayerItem
                            addToCartAction={addToCartAction}
                            src={element?.src}
                            key={index}
                            itemName={element?.itemName}
                            itemPrice={element?.price}
                            parentUnit={element?.unit}
                            childUnit={element?.rootUnit}
                            childQuantity={element?.quantityOfRoot}
                            itemID={element?.id}></TwoLayerItem>
                    )
                })
            }
            {(selectIndex < items.length - 3) && <RightButton className="short--rightButton" onClick={() => setSelectIndex(selectIndex + 1)}></RightButton>}
        </div>
    )
}

export default ShortListTLI;