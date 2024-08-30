import React from "react";
import CartIcon from "../assets/svg/add2Cart.svg"
import IconButton from "./iconButton";

const AddToCartButton = ({ onClick, className}) => {
    return (
        <div className={className}>
            <IconButton handleOnClick={onClick} svg={CartIcon}></IconButton>
        </div>
    );
}

export default AddToCartButton;