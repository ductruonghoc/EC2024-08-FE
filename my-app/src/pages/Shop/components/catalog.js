import React from "react";
import Catalog from "../../../containers/catalog";
import '../../../assets/css/catalog.css'

const ShopCataLog = ({items}) => {
    return (
        <Catalog className="row catalog" items={items}></Catalog>
    );
}

export default ShopCataLog;