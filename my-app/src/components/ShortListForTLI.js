import React, { lazy, memo } from "react";
import { useState } from "react";
import { useEffect } from "react";

import LeftButton from "./leftButton";
import RightButton from "./rightButton";
const TwoLayerItem = lazy(() => import("./TwoLayerItem.js"))

const sampleImgSrc = "https://img.freepik.com/free-vector/chocolate-cookies-biscuit-cartoon-vector-icon-illustration-food-object-icon-isolated-flat_138676-13050.jpg?t=st=1724835529~exp=1724839129~hmac=69737c2ceb024f00f19498f07966d8401f1ae7b71dd87d81f4895e0217d985c0&w=740";

const ShortListTLI = memo(function({ items, addToCartAction }){
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
                            src={element?.src ? element?.src : sampleImgSrc}
                            key={index}
                            itemName={element?.name}
                            itemPrice={element?.price}
                            itemID={element?.id}></TwoLayerItem>
                    )
                })
            }
            {(selectIndex < items.length - 3) && <RightButton className="short--rightButton" onClick={() => setSelectIndex(selectIndex + 1)}></RightButton>}
        </div>
    )
});

export default ShortListTLI;