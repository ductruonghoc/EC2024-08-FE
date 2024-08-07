import { SETCARTITEMS, ADDCARTITEM, REMOVECARTITEM } from "../action/cart"

const initialState = {
    /*About item: item id, quantity, total price*/
    items: []
}

const CartReducer = (state = initialState, action) => {
    switch (action.type){
        case SETCARTITEMS:
            return {
                ...state,
                items: action?.payload?.items
            }
        case ADDCARTITEM:
            state.items.push(action?.payload?.item)
            return state
        case REMOVECARTITEM:
            state.items.splice(action?.payload?.idx, 1)
            return state
        default:
            return state
    }
}

export default CartReducer;