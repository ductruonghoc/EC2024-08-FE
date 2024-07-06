import React from "react";
import Navigator from "../../../components/navigator";
import CategoryIcon from "../../../assets/svg/category.svg"

const ShopNavigator = ({className = "nav myNav flex-column"}) => {
    const item = [
        {
            "path": "/Shop",
            "type": "link",
            "icon": CategoryIcon,
            "describe": "Gian hàng"
        }
    ]
    return (
        <Navigator className={className} items={item}></Navigator>
    );
}

export default ShopNavigator;