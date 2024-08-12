import { SETRECEIPT, ADDRECEIPT, DONERECEIPT } from "../action/receipt";
const initialState = {
    // Item is this id: undefined,
    // clientId: undefined,
    // receiptDate: undefined,
    // itemListId: undefined,
    // address: undefined,
    // phone: undefined,
    // done: false
    // amount
    item: undefined
}

const ReceiptReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case SETRECEIPT:
            return ({
                ...state,
                item: action.payload
            });
        case DONERECEIPT:
            return state.item.filter(i => i.id !== action.payload);
        case ADDRECEIPT:
            return state.item ? state.item.push(action.payload) : [action.payload];
        default:
            return state    
        }
}

export default ReceiptReducer;