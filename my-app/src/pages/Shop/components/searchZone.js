import React from "react";
import SearchZone from "../../../containers/searchZone";

const ShopSearchZone = ({items, setRenderKey, action }) => {
    const SearchByName = (k) => {
        let r = []

        items.forEach((element) => {
            const f = element["item"].filter((i) => i["name"].includes(k))
            f.forEach((i) => r.push(i))
        });
        console.log(items)

        return r;
    }
    const i = items.map((j) => j["type"])
    return (<SearchZone items={i} setResult={setRenderKey} action={action} firstAdapt={SearchByName}/>);
}

export default ShopSearchZone;