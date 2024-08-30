import React from "react";
import Navigator from "../../../components/navigator";
import ClockIcon from "../../../assets/svg/clock.svg";

const ManagerNavigator = ({ elementStyle = "flex-column", isExpand = false, setExpand = null }) => {
    const item = [
        {
            "path": "/Manager",
            "type": "link",
            "icon": ClockIcon,
            "describe": "Doanh thu"
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

export default ManagerNavigator;