import sellItem from "./selltem";

const sellGroup = [{
    "id": "BQ",
    "name": "Bánh Quy",
    "type": "regular",
    "item": []
},
{
    "id": "BI",
    "name": "Bicossti",
    "type": "regular",
    "item": []
},
{
    "id": "BD",
    "name": "Bánh Dứa",
    "type": "regular",
    "item": []
}].map((e) => {sellItem.forEach((el) => {
        if (e["id"] === el["item"]["type"])
            e["item"].push(el)
    })
    return e;
})

export default sellGroup;