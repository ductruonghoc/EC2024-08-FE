import React from "react";

import NumericStepper from "./numericStepper";
import RoundButton from "./roundButton";

import "../assets/css/itemInformation.css";

import CartAddIcon from "../assets/svg/add2Cart.svg"

const itemQuickInformation = ({ item = null }) => {
    return (
        <div
            className="itemQuickInformation">
            <img
                className="itemQuickInformation--image"
                src={item["src"]} />
            <div
                className="itemQuickInformation--context">
                <div className="name">
                    {item["item"]["name"]}
                </div>
                <div className="price">
                    {item["price"]}
                </div>
                <div className="quantity">
                    <NumericStepper/>
                    <div>
                        {`${item["unit"]}/ ${item["quantityOfItem"]} ${item["item"]["unit"]}`}
                    </div>
                </div>
                <div className="ingredient">
                    {`Nguyên liệu: ${item["item"]["ingredient"].slice(0, 3).map((e) => e["name"] + " ")}...`}
                </div>
                <div className="description">
                    {item["Description"]}
                </div>
                <div className="buttonGroup">
                    <RoundButton 
                        svg={CartAddIcon}/>
                </div>
            </div>
        </div>
    );
};

export default itemQuickInformation;
