import React from "react";
import DeleteIcon from "../assets/svg/delete.svg";
import IconButton from "./iconButton";

const DeleteButton = ({handleOnClick}) => {
    return (<IconButton handleOnClick={handleOnClick} svg={DeleteIcon}></IconButton>)
}

export default DeleteButton;