import React from "react";
import SearchZone from "../../../containers/searchZone";

const ShopSearchZone = ({items, setRenderKey, action }) => {
    const SearchByName = (k) => {
        let r = []

        items.forEach((element) => {
            const f = element["item"].filter((i) => i["item"]["name"].includes(k))
            f.forEach((i) => r.push(i["item"]["name"]))
        });

        return r;
    }
    const i = items.map((j) => j["name"])
    return (<SearchZone items={i} setResult={setRenderKey} action={action} firstAdapt={SearchByName}/>);
}

export default ShopSearchZone;