export const SETCARTITEMS = "SETCARTITEMS";
export const ADDCARTITEM = "ADDCARTITEM";
export const REMOVECARTITEM = "REMOVECARTITEM";

export const SetCartItems = (payload = []) => ({
    type: SETCARTITEMS,
    payload: payload
});

export const AddCartItem = (payload = undefined) => ({
    type: ADDCARTITEM,
    payload: payload
});

export const RemoveCartItem = (payload = undefined) => ({
    type: REMOVECARTITEM,
    payload: payload
});