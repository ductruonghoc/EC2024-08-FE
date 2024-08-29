import { memo } from "react";
import React from "react";
import ShortListTLI from "../components/ShortListForTLI";

const ListWithTitle = memo(function({title, items, className, addToCartAction = undefined}) {
    return (
        <div className={className}>
            <div className="title">
                {title}
            </div>
            <ShortListTLI 
                items={items}
                addToCartAction={addToCartAction}/>
        </div>
    )
});

export default ListWithTitle;