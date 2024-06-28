import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import ShopSearchZone from "./searchZone";
import ShopCataLog from "./catalog";

const Category = ({ items }) => {
    const defaultList = {items};
    const [renderBy, setRenderBy] = useState(defaultList);

    return (
        <div>
            <ShopSearchZone items={items} action={setRenderBy} setRenderKey={setRenderBy} />
            <ShopCataLog items={renderBy}></ShopCataLog>
        </div>
    );
};

export default Category;