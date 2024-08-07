import { SETCLIENT } from "../action/client_info";

const initialState = {
    account: undefined,
    password: undefined,
    name: undefined,
    role: undefined,
    address: undefined,
    phoneNumber: undefined,
    id: undefined
}

const ClientInfoReducer = (state = initialState, action) => {
    switch (action.type) {
      case SETCLIENT:
        return{
            ...state,
            account: action.payload?.account,
            password: action.payload?.password,
            name: action.payload?.name,
            role: action.payload?.role,
            address: action.payload?.address,
            phoneNumber: action.payload?.phoneNumber,
            id: action.payload?.id
        }
      default:
        return state;
    }
  };
  
  export default ClientInfoReducer;