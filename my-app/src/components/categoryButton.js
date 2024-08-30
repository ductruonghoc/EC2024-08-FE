import React from "react";
import IconButton from "./iconButton";
import CategoryIcon from "../assets/svg/category.svg"

const CategoryButton = ({onClick = null}) => {
    return (
        <IconButton onClick={onClick} svg={CategoryIcon}></IconButton>
    );
}

export default CategoryButton;