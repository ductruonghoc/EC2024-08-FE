import React from "react";
import ListWithTitle from "./ListWithTitle";

const Catalog = ({ items, className="catalog"}) => {
    return (
        <div className={className}>
            {
                items.map((element, index) => {
                    return (
                        <ListWithTitle className="type" title={element["name"]} items={element["item"]} key={index}></ListWithTitle>
                    );
                })
            }
        </div>
    );
}

export default Catalog