export const SETRECEIPT = "SETRECEIPT";
export const DONERECEIPT = "DONERECEIPT";
export const ADDRECEIPT = "ADDRECEIPT";

export const SetReceipt = (payload = undefined) => {
    return ({
        type: SETRECEIPT,
        payload: payload
    })
}

export const DoneReceipt= (payload = undefined) => {
    return ({
        type:  DONERECEIPT,
        payload: payload
    })
}

export const AddReceipt= (payload = undefined) => {
    return ({
        type:  ADDRECEIPT,
        payload: payload
    })
}