import React from "react";
import IconButton from "./iconButton";
import CartIcon from "../assets/svg/cart.svg"

const CartButton = ({onClick = null}) => {
    return (
        <IconButton svg={CartIcon} onClick={onClick}></IconButton>
    )
}

export default CartButton;