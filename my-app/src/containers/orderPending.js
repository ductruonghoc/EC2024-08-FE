import React from "react";

import HorizontalList from "../components/horizontalList";

import "../assets/css/orderPending.css"

import DateString from "../assets/pureJS/dateString";

const OrderPending = ({ item = null }) => {
    if (item === null)
        return (
            <></>
        );

    const orderInformation = item["item"].map(e => {
        const date = e["date"]
        const targetDate = date.setDate(date.getDate() + 3)

        return [
            {
                "type": "text",
                "style": "bold",
                "describe": `# ${e["id"]}`
            },
            {
                "type": "text",
                "style": "bold",
                "describe": `Giao ngày ${DateString(targetDate)})}`
            }
        ]})

    return (
        <div className="orderPending">
            {
                orderInformation.map(e => (<HorizontalList
                    elementStyle="orderPending--order"
                    item={e} />))
            }
        </div>
    )
}

export default OrderPending;