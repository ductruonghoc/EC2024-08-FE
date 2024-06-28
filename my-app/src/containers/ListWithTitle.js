import React from "react";
import ShortListTLI from "../components/ShortListForTLI";

const ListWithTitle = ({title, items, className}) => {
    return (
        <div className={className}>
            <div className="title">
                {title}
            </div>
            <ShortListTLI items={items}></ShortListTLI>
        </div>
    )
}

export default ListWithTitle;