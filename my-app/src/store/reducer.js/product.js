
// item is list of this
//     id: undefined,
//     itemName: undefined,
//     item_type_id: undefined,
//     unit: undefined,
//     src: undefined,
//     price: undefined,
//     quantity: undefined,
//     parent_id: undefined,
//     description: undefined,
//     shortDescription: undefined,
//     quantityOfRoot: undefined,
//     rootUnit: undefined


// type is list of this
//     id: undefined,
//     typeName: undefined

import { SETPRODUCT, SETITEM, SETTYPE } from "../action/product";

const initialState = {
    item: undefined,
    type: undefined
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETPRODUCT:
            return {
                ...state,
                item: action.payload?.item,
                type: action.payload?.type,
            };
        case SETITEM:
            return {
                ...state,
                item: action.payload?.item
            }
        case SETTYPE:
            return {
                ...state,
                type: action.payload?.type
            }
        default:
            return state;
    }
}

export default ProductReducer;

