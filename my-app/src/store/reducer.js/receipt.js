import { SETRECEIPT, ADDRECEIPT, DONERECEIPT } from "../action/receipt";
const initialState = {
    // Item is 
    //this id: undefined,
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
            const newStateItem = state.item.filter(i => i.id !== action.payload);
            return {
                ...state,
                item: newStateItem
            };
        case ADDRECEIPT:
            const items = state.item;
            return {
                ...state,
                item: [...items, ...action.payload]
            };
        default:
            return state    
        }
}

export default ReceiptReducer;