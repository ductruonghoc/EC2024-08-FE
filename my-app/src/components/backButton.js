import React from "react";
import IconButton from "./iconButton";
import BackIcon from "../assets/svg/back.svg"

const BackButton = ({onClick}) => {
    return (
        <IconButton handleOnClick={onClick} svg={BackIcon}></IconButton>
    );
}

export default BackButton;