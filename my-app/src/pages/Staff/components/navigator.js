import React from "react";
import Navigator from "../../../components/navigator";
import ClockIcon from "../../../assets/svg/clock.svg"

const StaffNavigator = ({ elementStyle = "flex-column", isExpand = false, setExpand = null }) => {
    const item = [
        {
            "path": "/Staff",
            "type": "link",
            "icon": ClockIcon,
            "describe": "Đơn hàng mới"
        }
    ]

    return (
        <Navigator
            isExpand={isExpand}
            setExpand={setExpand}
            className={`nav myNav ${elementStyle}`}
            items={item}></Navigator>
    )
}

export default StaffNavigator;