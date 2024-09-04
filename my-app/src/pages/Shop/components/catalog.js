import React from "react";
import Catalog from "../../../containers/catalog";
import '../../../assets/css/catalog.css'
import { useDispatch } from "react-redux";
import { AddCartItem } from "../../../store/action/cart";

const ShopCataLog = ({ items }) => {
    const dispatch = useDispatch()
    const addToCartAction = (item) => {
        const parameter = {
            item: {
                productId: item.id,
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