import React from "react";
import TwoLayerItem from "./TwoLayerItem";

const ShortListTLI = ({ items }) => {
    return (
        <div className="list short">
            {
                
                items.map(element => {
                    return (
                        <TwoLayerItem src={element["src"]}></TwoLayerItem>
                    )
                })
            }
        </div>
    )
}

export default ShortListTLI;