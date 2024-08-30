import React from "react";

import HorizontalList from "../components/horizontalList";
import Line from "../components/line";

import "../assets/css/orderPending.css"

import DateString from "../assets/pureJS/dateString";

const OrderPending = ({ item = null }) => {
    if (item === null)
        return (
            <></>
        );

    const orderInformation = (i) => {
        console.log(i)
        const date = new Date(i.item["date"].getTime())
        date.setDate(date.getDate() + 3)
        return [
            {
                "type": "text",
                "style": "bold",
                "describe": `# ${i.item["id"]}`
            },
            {
                "type": "text",
                "style": "bold",
                "describe": `Giao ngày ${DateString(date)}`
            }
        ];
    }

    return (
        <div className="orderPending">
            {
                <HorizontalList
                    elementStyle="orderPending--order"
                    item={orderInformation(item)} />
            }
            <Line
                elementStyle="orderPending--line"
                type="blur" />
        </div>
    )
}

export default OrderPending;