import React from "react";

import "../../../assets/css/orderQueue.css"

import OrderQueueTitle from "./orderQueueTitle";
import Line from "../../../components/line";
import ShopOrderPending from "./orderPending";

const OrderQueue = ({ item }) => {
    return (
        <div className=".orderQueue">
            <OrderQueueTitle orderQuantity={item.length}></OrderQueueTitle>
            <Line elementStyle="orderQueue--line"/>
            {
                item.map((e, i) => (<div key={i} className="orderQueue--orderPending">
                    <ShopOrderPending item={e}></ShopOrderPending>
                </div>))}
        </div>
    );
}

export default OrderQueue;