import React from "react";
import Navigator from "../../../components/navigator";
import ClockIcon from "../../../assets/svg/clock.svg"
import { useNavigate } from "react-router-dom";

const StaffNavigator = ({ elementStyle = "flex-column", isExpand = false, setExpand = null }) => {
    const navigate = useNavigate();
    const item = [
        {
            "path": "/Staff",
            "type": "link",
            "icon": ClockIcon,
            "describe": "Đơn hàng mới"
        },        
        {
            onDirect: () => (
                localStorage.removeItem('AuthToken') ||
                navigate("/")
            ),
            directLabel: "Đăng xuất",
            type: "account"
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