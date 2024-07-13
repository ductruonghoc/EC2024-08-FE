import React from "react";
import SearchZone from "../../../containers/searchZone";

const ShopSearchZone = ({ items, setRenderKey, action }) => {
    const SearchByName = (k) => {
        let r = []

        items.forEach((element) => {
            const f = element["item"].filter((i) => i["item"]["name"].includes(k))
            f.forEach((i) => r.push(
                {
                    "text": i["item"]["name"],
                    "path": i["item"]["id"]
                }))
        });

        console.log(r)

        return r;
    }
    const i = items.map((j) => ({
        "text": j["name"],
        "path": `/Shop/${j["id"]}`
    }))
    return (<SearchZone items={i} setResult={setRenderKey} action={action} firstAdapt={SearchByName} />);
}

export default ShopSearchZone;