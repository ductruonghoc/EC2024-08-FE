import item from "./item.js"

const sellitem = [{
    "price": 60000,
    "unit": "Set",
    "quantityOfitem": 20,
    "id": "SBQC",
    "itemID": "BQC0",
    "item": {},
    "description": "Bánh rất ngon!"
},
{
    "price": 60000,
    "unit": "Set",
    "quantityOfitem": 20,
    "id": "SBQB",
    "itemID": "BQB0",
    "item": {},
    "description": "Bánh rất ngon!"
},
{
    "price": 190000,
    "unit": "Set",
    "quantityOfitem": 20,
    "id": "SBQY",
    "itemID": "BQYM",
    "item": {},
    "description": "Bánh rất ngon!"
},
{
    "price": 60000,
    "unit": "Set",
    "quantityOfitem": 20,
    "id": "SBQC",
    "itemID": "BQCD",
    "item": {},
    "description": "Bánh rất ngon!"
},
{
    "price": 110000,
    "unit": "Set",
    "quantityOfitem": 15,
    "id": "SBTX",
    "itemID": "BTX0",
    "item": {},
    "description": "Bánh rất ngon!"
},
{
    "price": 185000,
    "unit": "Set",
    "quantityOfitem": 10,
    "id": "SBDD",
    "itemID": "BDDL",
    "item": {},
    "description": "Bánh rất ngon!"
}].map((e) => {
    e["item"] = item.find((el) => el["id"] === e["itemID"])
    return e;
})

export default sellitem;