import { useState } from "react";
import React from "react";
import ShopSearchZone from "./searchZone";

const Category = ({ items }) => {
    const defaultList = null
    const [renderBy, setRenderBy] = useState(defaultList)
    const CataLogRender = () => {
        return (
            <div></div>
        );
    }
    const [catalog, setCatalog] = useState(CataLogRender)

    return (<div>
        <ShopSearchZone items={items} result={renderBy} setResult={setRenderBy} action={setCatalog(CataLogRender)}></ShopSearchZone>
        {catalog}
    </div>
    );
}

export default Category;