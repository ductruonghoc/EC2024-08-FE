import React from "react";
import IconButton from "./iconButton";
import LeftIcon from "../assets/svg/left.svg"

const LeftButton = ({onClick}) => {
    return (
        <IconButton handleOnClick={onClick} svg={LeftIcon}></IconButton>
    );
}

export default LeftButton;