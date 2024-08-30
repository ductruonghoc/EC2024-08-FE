
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

import {SETITEM} from "../action/product";

const initialState = {
    item: undefined,
    type: undefined
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETITEM:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}

export default ProductReducer;

