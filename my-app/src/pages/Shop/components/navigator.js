import React, {useEffect, useState} from "react";
import Navigator from "../../../components/navigator";
import CategoryIcon from "../../../assets/svg/category.svg";
import CartIcon from "../../../assets/svg/cart.svg";
import {  useSelector } from "react-redux";
import Cart from "./cart";

const ShopNavigator = ({ elementStyle = "flex-column", isExpand = false, setExpand = null }) => {
    const [showCart, setShowCart] = useState(false);
    const handleClose = () => setShowCart(false);
    const handleShow = () => setShowCart(true);
    const cart= useSelector(state=>state.cart);
    const [cartItems, setCartItems] = useState(cart.items);
    const item = [
        {
            "path": "/Shop",
            "type": "link",
            "icon": CategoryIcon,
            "describe": "Gian hàng"
        },
        {
            "action": handleShow,
            "type": "offCanvas",
            "icon": CartIcon,
            "describe": "Giỏ hàng"
        }
    ]
    useEffect(() => {
        setCartItems(cart.items);
    }, [cart, setCartItems])

    return (
        <>
            <Cart cartItems={cartItems} handleClose={handleClose} show={showCart} />
            <Navigator
                isExpand={isExpand}
                setExpand={setExpand}
                className={`nav myNav ${elementStyle}`}
                items={item}></Navigator>
        </>
    );
}

export default ShopNavigator;