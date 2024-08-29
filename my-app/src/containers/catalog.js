import React, {lazy} from "react";
const ListWithTitle = lazy(() => import('./ListWithTitle.js'))
const Catalog = ({ items, className = "catalog", addToCartAction }) => {
    return (
        <div className={className}>
            {
                items?.map((element, index) => {
                    return (
                        <ListWithTitle
                            addToCartAction={addToCartAction}
                            className="type"
                            title={element.group}
                            items={element.item}
                            key={index}/>
                    );
                })
            }
        </div>
    );
}

export default Catalog