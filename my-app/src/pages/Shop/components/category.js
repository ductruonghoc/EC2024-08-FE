import { useState } from "react";
import React from "react";
import SearchZone from "../../../containers/searchZone";

const Category = ({ items }) => {
    const defaultList = null
    const [pickedList, setPickedList ] = useState(defaultList)
    const [catalog, setCatalog] = useState(pickedList)

    const itemTypes = items.map((i) => i["type"])

    return <div>
        <SearchZone items={itemTypes} setCatalog={setCatalog} keyRender={pickedList} setKeyRender={setPickedList}></SearchZone>
    </div>
}

export default Category;