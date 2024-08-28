import React from "react";
import Catalog from "../../../containers/catalog";
import '../../../assets/css/catalog.css'
import { useDispatch, useSelector } from "react-redux";
import { AddCartItem } from "../../../store/action/cart";

const ShopCataLog = ({ items }) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const addToCartAction = (item) => {
        const parameter = {
            item: {
                id: item.id,
                name: item.name,
                quantity: 1,
                price: item.price
            }
        }
        dispatch(AddCartItem(parameter))
    }
    return (
        <Catalog addToCartAction={addToCartAction} className="row catalog" items={items}></Catalog>
    );
}

export default ShopCataLog;