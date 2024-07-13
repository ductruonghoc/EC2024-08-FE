import { useState } from "react";
import React from "react";

import { useParams } from "react-router-dom";

import ShopSearchZone from "./searchZone";
import ShopCataLog from "./catalog";

const Category = ({ items }) => {
    const { type } = useParams()
    const defaultList = items
    const [renderBy, setRenderBy] = useState(defaultList)
    const [renderKey,  setRenderKey] = useState("")

    return (
        <div>
            <ShopSearchZone items={items} action={setRenderKey} setRenderKey={setRenderKey} />
            {!type && <ShopCataLog items={renderBy}></ShopCataLog>}
        </div>
    );
};

export default Category;