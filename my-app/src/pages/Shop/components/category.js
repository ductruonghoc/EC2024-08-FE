import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import ShopSearchZone from "./searchZone";
import ShopCataLog from "./catalog";

const Category = ({ items }) => {
    const defaultList = items
    const [renderBy, setRenderBy] = useState(defaultList)
    const [renderKey,  setRenderKey] = useState("")

    return (
        <div>
            <ShopSearchZone items={items} action={setRenderKey} setRenderKey={setRenderKey} />
            <ShopCataLog items={renderBy}></ShopCataLog>
        </div>
    );
};

export default Category;