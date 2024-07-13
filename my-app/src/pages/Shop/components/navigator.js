import React from "react";
import Navigator from "../../../components/navigator";
import CategoryIcon from "../../../assets/svg/category.svg"

const ShopNavigator = ({ elementStyle = "flex-column", isExpand = false, setExpand = null }) => {
    const item = [
        {
            "path": "/Shop",
            "type": "link",
            "icon": CategoryIcon,
            "describe": "Gian hàng"
        }
    ]
    return (
        <Navigator
            isExpand={isExpand}
            setExpand={setExpand}
            className={`nav myNav ${elementStyle}`}
            items={item}></Navigator>
    );
}

export default ShopNavigator;