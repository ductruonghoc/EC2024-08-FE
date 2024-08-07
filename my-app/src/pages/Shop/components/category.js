import React from "react";

import { useParams } from "react-router-dom";
import { itemTest, typeTest } from "../../../assets/testData/newItemForTest";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SetItem, SetType } from "../../../store/action/product";

import ShopSearchZone from "./searchZone";
import ShopCataLog from "./catalog";

export const SEARCH = 0;
export const TYPEFILTER = 1;

const Category = () => {
    const {method, key} = useParams()
    const setRenderKey = () => {}
    const dispatch = useDispatch();
    const item = useSelector(state => state.product?.item)
    const type = useSelector(state => state.product?.type)
    let product = undefined
    dispatch(SetItem({item: itemTest}))
    dispatch(SetType({type: typeTest}))
    if (method && key)
    {
        if(Number(method) === TYPEFILTER)
        {
            product = (type && item) ? [{
                group: type?.find(i => i?.id === Number(key))?.typeName,
                item: item?.filter(i => i.item_type_id === Number(key))
            }] : undefined//Filter by item and key type name
        }
        else if(Number(method) === SEARCH)
        {
            product = (type && item) ? [{
                group: "Kết quả",
                item: item?.filter(i => i?.itemName?.includes(key))
            }] : undefined//filter by item name include key
        }
    }
    else
    {
        product = (type && item) ? type?.map(it => ({
            group: it?.typeName,
            item: item?.filter(i => i.item_type_id === it?.id),
        })) : undefined//Get all item by type
    }
    console.log(product)//On mouch fetch, dispatch and filter item by method
    
    return (
        <div>
            <ShopSearchZone type={type} action={setRenderKey} setRenderKey={setRenderKey} />
            {<ShopCataLog items={product}></ShopCataLog>}
        </div>
    );
};

export default Category;