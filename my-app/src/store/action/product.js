export const SETPRODUCT = "SETPRODUCT";
export const SETITEM = "SETITEM";
export const SETTYPE = "SETTYPE";

export const SetProduct = (payload = undefined) => ({
    type: SETPRODUCT,
    payload: payload
});

export const SetItem = (payload = undefined) => ({
    type: SETITEM,
    payload: payload
});

export const SetType = (payload = undefined) => ({
    type: SETTYPE,
    payload: payload
});