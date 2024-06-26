import React from "react";
import SearchZone from "../../../containers/searchZone";

const ShopSearchZone = ({items, setCatalog, keyRender, setKeyRender}) => {
    return <SearchZone items={items} setCatalog={setCatalog} keyRender={keyRender} setKeyRender={setKeyRender} />
}

export default ShopSearchZone;