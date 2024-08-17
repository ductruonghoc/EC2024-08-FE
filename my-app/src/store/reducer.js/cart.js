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
            const newStateItem = state.items.filter(i => i.id !== action.payload);
            return {
                ...state,
                items: newStateItem
            };
        default:
            return state
    }
}

export default CartReducer;