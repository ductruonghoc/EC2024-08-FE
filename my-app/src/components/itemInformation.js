import React from "react";
import AddToCartButton from "./add2CartButton";

const ItemInformation = ({ className="itemInformation",itemID = 0, itemName, itemPrice, parentUnit, childUnit, childQuantity, addToCartAction = undefined }) => {
    const cartItem = {
        id: itemID,
        quantity: 1,
        price: itemPrice,
        totalPrice: itemPrice
    }
    return (
        <div className={className}>
            <div className="itemInformation--name">{itemName}</div>
            <div className="itemInformation--unit">{parentUnit} {"("}{childQuantity} {childUnit}{")"}</div>
            <div className="itemInformation--price">Giá: {itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
            <AddToCartButton
                onClick={() => addToCartAction(cartItem)}
                className="itemInformation--button"></AddToCartButton>
        </div>
    )
}

export default ItemInformation;

