import React, { useCallback, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SetItem } from "../../../store/action/product";

import fetching from "../../../services/api/fetchBEHost";
import ShopSearchZone from "./searchZone";
import ShopCataLog from "./catalog";

export const SEARCH = 0;
export const TYPEFILTER = 1;

const Category = () => {
    const { method, key } = useParams();
    const setRenderKey = () => { };
    const dispatch = useDispatch();
    const item = useSelector(state => state.product?.item);
    const [type, setType] = useState([]);
    const [product, SetProduct] = useState(undefined);

    const GetProduct = useCallback(() => {
        if (method && key) {
            if (Number(method) === TYPEFILTER) {
                SetProduct([{
                    group: key,
                    item: item[key]
                }])//Filter by item and key type name
            }
            else if (Number(method) === SEARCH) {
                const prevItem = [];
                for (const i in item) {
                    const addItem = item[i].filter(it => it.name.includes(key)); //Added item filter by search key
                    prevItem.push(...addItem);
                }
                SetProduct([{
                    group: "Kết quả",
                    item: prevItem
                }])//filter by item name include key
            }
        }
        else {
            const prevProduct = [];
            for (const i in item) {
                prevProduct.push(
                    {
                        group: i,
                        item: item[i]
                    }
                )
            }
            SetProduct(prevProduct);
        }
    }, [SetProduct, item, key, method])

    const GetType = useCallback(() => {
        const prevType = [];
        for(const i in item)
        {
            prevType.push(i);
        }
        setType(prevType);
    }, [item])

    useEffect(() => {
        fetching("api/products/group-by-type", {method: "POST"}).then(
            result => {
                for(const i in result)
                {
                    result[i].forEach(element => {
                        element.price = element.price * 1000;
                    });
                }
                dispatch(SetItem(result));
            });
            GetProduct();
            GetType();        
    }, [dispatch, GetProduct, GetType]); //Fetch on mount
    
    
    return (
        <div>
            <ShopSearchZone type={type} action={setRenderKey} setRenderKey={setRenderKey} />
            {<ShopCataLog items={product}></ShopCataLog>}
        </div>
    );
};

export default Category;