import React from "react";
import Navigator from "../../../components/navigator";
import CategoryButton from "../../../components/categoryButton";
const ShopNavigator = ({className = "nav myNav flex-column"}) => {
    const item = [
        {
            "path": "/Shop",
            "view": <CategoryButton></CategoryButton>
        }
    ]
    return (
        <Navigator className={className} items={item}></Navigator>
    );
}

export default ShopNavigator;