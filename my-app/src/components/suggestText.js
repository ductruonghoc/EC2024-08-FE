import React from "react";
import TextList from "./textList";

const SuggestText = ({key, suggest}) => {
    const list = suggest.map((e) => {
        return {
            "highlight": key,
            "normal": e
        }
    })
    return (<TextList list={list}></TextList>)
}

export default SuggestText;