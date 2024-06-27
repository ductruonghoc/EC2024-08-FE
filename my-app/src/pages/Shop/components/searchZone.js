import React from "react";
import SearchZone from "../../../containers/searchZone";

const ShopSearchZone = ({items, inputValue, setInputValue, changeResult, action }) => {
    return (<SearchZone items={items} inputValue={inputValue} setInputValue={setInputValue} changeResult={changeResult} action={action}/>);
}

export default ShopSearchZone;