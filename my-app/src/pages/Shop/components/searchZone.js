import React from "react";
import SearchZone from "../../../containers/searchZone";

const ShopSearchZone = ({items, handleFilter}) => {
    return <SearchZone items={items} handleFilter={handleFilter} />
}

export default ShopSearchZone;