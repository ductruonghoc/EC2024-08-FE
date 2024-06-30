import React from "react";
import CartIcon from "../assets/svg/cart.svg"
import IconButton from "./iconButton";

const CartButton = ({ onClick, className}) => {
    return (
        <div className={className}>
            <IconButton handleOnClick={onClick} svg={CartIcon}></IconButton>
        </div>
    );
}

export default CartButton;