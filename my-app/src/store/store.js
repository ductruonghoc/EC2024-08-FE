
import { configureStore } from '@reduxjs/toolkit'
import ClientInfoReducer from "./reducer.js/client_info";
import ProductReducer from './reducer.js/product';
import ReceiptReducer from './reducer.js/receipt';
import CartReducer from './reducer.js/cart';
// Create the store
const store = configureStore({
  reducer: {
    clientInfo: ClientInfoReducer,
    product: ProductReducer,
    receipt: ReceiptReducer,
    cart: CartReducer,
  }
});

export default store;