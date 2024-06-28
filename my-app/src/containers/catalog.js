import React from "react";
import ListWithTitle from "./ListWithTitle";

const Catalog = ({ items, className="catalog"}) => {
    return (
        <div className={className}>
            {
                items.map(element => {
                    return (
                        <ListWithTitle className="type" title={element["type"]} items={element["item"]}></ListWithTitle>
                    );
                })
            }
        </div>
    );
}

export default Catalog