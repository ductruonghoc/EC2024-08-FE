import React from "react";
import TextList from "./textList";

const SuggestText = ({list}) => {
    console.log(list)
    return (<TextList list={list}></TextList>)
}

export default SuggestText;