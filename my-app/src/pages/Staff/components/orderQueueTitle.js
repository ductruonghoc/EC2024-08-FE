import React from "react";
import HorizontalList from "../../../components/horizontalList";

const OrderQueueTitle = ({orderQuantity}) => {
    const item = [
        {
            "type": "text",
            "describe": "ĐƠN KHÁCH ĐẶT MỚI"
        },
        {
            "type": "text",
            "describe": `${orderQuantity} / 300`
        }
    ]

    return (
        <HorizontalList item={item} elementStyle="orderQueue--title"></HorizontalList>
    );
}

export default OrderQueueTitle;