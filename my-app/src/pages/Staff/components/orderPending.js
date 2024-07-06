import React from "react";
import OrderPending from "../../../containers/orderPending";

const ShopOrderPending = (item = null) => {
    return (
        <OrderPending item={item}></OrderPending>
    );
}

export default ShopOrderPending;