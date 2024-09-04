import { SETCLIENT } from "../action/client_info";

const initialState = {
    account: undefined,
    password: undefined,
    name: undefined,
    role: undefined,
    address: undefined,
    phoneNumber: undefined,
    id: undefined,
    token: undefined
}

const ClientInfoReducer = (state = initialState, action) => {
    switch (action.type) {
      case SETCLIENT:
        return{
            ...action.payload
        }
      default:
        return state;
    }
  };
  
  export default ClientInfoReducer;