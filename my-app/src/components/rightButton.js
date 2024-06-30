import React from "react";
import IconButton from "./iconButton";
import RightIcon from "../assets/svg/right.svg"

const RightButton = ({onClick, className}) => {
    return (
        <div className={className}>
            <IconButton handleOnClick={onClick} svg={RightIcon}></IconButton>
        </div>
    );
}

export default RightButton;