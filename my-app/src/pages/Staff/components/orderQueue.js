import React from "react";

import "../../../assets/css/orderQueue.css"

import OrderQueueTitle from "./orderQueueTitle";
import SolidLine from "../../../components/solidLine";
import ShopOrderPending from "./orderPending";

const OrderQueue = ({item}) => {
    return (
        <div className=".orderQueue">
            <OrderQueueTitle orderQuantity={item.length}></OrderQueueTitle>
            <SolidLine elementStyle="orderQueue--line"></SolidLine>
            <div className="orderQueue--orderPending">
                <ShopOrderPending item={item}></ShopOrderPending>
            </div>
        </div>
    );
}

export default OrderQueue;