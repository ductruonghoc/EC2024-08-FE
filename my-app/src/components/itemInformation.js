import React from "react";
import CartButton from "./cartButton";

const ItemInformation = ({ className="itemInformation",itemName, itemPrice, parentUnit, childUnit, childQuantity }) => {
    return (
        <div className={className}>
            <div className="itemInformation--name">{itemName}</div>
            <div className="itemInformation--unit">{parentUnit} {"("}{childQuantity} {childUnit}{")"}</div>
            <div className="itemInformation--price">Giá: {itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
            <CartButton
                onClick={() => { }}
                className="itemInformation--button"></CartButton>
        </div>
    )
}

export default ItemInformation;

