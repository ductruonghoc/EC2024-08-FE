import React, { memo } from "react";
import "../assets/css/itemInformation.css";
import AddToCartButton from "./add2CartButton";
const TwoLayerItem = memo(function TwoLayerItem({ src, itemName, itemPrice, addToCartAction = undefined, itemID = 0 }) {
    const cartItem = {
        id: itemID,
        quantity: 1,
        price: itemPrice,
        name: itemName
    }
    return (
        <div className="item">
            <img src={src} loading="lazy" alt={itemName}></img>
            <div className="itemInformation twoLayerItem--UpperLayer pt-0 mt-0">
                <div className="row m-0 h-100">
                    <div className="col-9 pt-0 mt-0 h-100 pb-1">
                        <div className="h-75 overflow-hidden pt-1">
                            <strong>{itemName?.split(" ", 2).join(" ")}</strong>
                        </div>
                        <p className="fs-6 m-0">{itemPrice?.toLocaleString()}</p>
                    </div>
                    <div className="col-1 w-25 m-0 p-0  d-flex align-items-center">
                        <AddToCartButton
                            onClick={() => addToCartAction(cartItem)}
                            className="w-100 btn btn-light p-1 m-0"
                        >
                        </AddToCartButton>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default TwoLayerItem;