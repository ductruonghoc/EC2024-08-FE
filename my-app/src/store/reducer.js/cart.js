import { SETCARTITEMS, ADDCARTITEM, REMOVECARTITEM } from "../action/cart"

const initialState = {
    /*About item: item id, quantity, total price*/
    items: []
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETCARTITEMS:
            return {
                ...state,
                items: action?.payload?.items
            }
        case ADDCARTITEM:
            const addedItems = [...state.items]
            addedItems.push(action?.payload?.item)
            return {
                ...state,
                items: addedItems
            }
        case REMOVECARTITEM:
            const slicedItem = [...state.items]
            slicedItem.items.splice(action?.payload?.idx, 1)
            return { ...state, 
                items: slicedItem 
            }
        default:
            return state
    }
}

export default CartReducer;