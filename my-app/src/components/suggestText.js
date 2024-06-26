import React from "react";
import TextList from "./textList";

const SuggestText = ({highlight, text}) => {
    const passin = suggest.map((e) => {
        return {
            "highlight": highlight,
            "text": text
        }
    })
    return (<TextList list={passin}></TextList>)
}

export default SuggestText;