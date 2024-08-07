import React from "react";
import SearchZone from "../../../containers/searchZone";
import { TYPEFILTER } from "./category";

const ShopSearchZone = ({ setRenderKey, action, type = undefined }) => {
    const SearchByName = (k) => {
        return k;
    }
    const i = type?.map((j) => ({
        text: j?.typeName,
        path: `/Shop/${TYPEFILTER}/${j?.id}`
    }))
    console.log(i)
    return (<SearchZone items={i} setResult={setRenderKey} action={action} firstAdapt={SearchByName} />);
}

export default ShopSearchZone;