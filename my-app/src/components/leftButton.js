import React from "react";
import IconButton from "./iconButton";
import LeftIcon from "../assets/svg/left.svg"

const LeftButton = ({ onClick, className }) => {
    return (
        <div className={className}>
            <IconButton handleOnClick={onClick} svg={LeftIcon}></IconButton>
        </div>
    );
}

export default LeftButton;