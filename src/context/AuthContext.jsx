import { createContext, useEffect, useContext, useReducer } from "react";

//declaring initial state
const initialState = {
    id: null,
    name: null,
    user_type: null
};

//creating primary  context
export const authContext = createContext(initialState);

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
              id: null,
              name: null,
              user_type: null
            };
        case 'LOGIN_SUCCESS':
            return {
                id:action.payload.id,
                name:action.payload.name,
                user_type:action.payload.user_type
            };
        case 'LOGOUT':
            return {
                id: null,
                name: null,
                user_type: null
            };
        default:
            return state;
    }
};

//creating provider

export const authContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    return <authContext.Provider value={{id:state.id, name:state.name, user_type:state.user_type, dispatch}}>
        {children}
    </authContext.Provider>
}
