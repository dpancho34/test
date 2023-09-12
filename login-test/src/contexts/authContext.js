import React, { useState, useReducer } from "react";

const AuthContext = React.createContext();

const authInicialState = {
    status: "testing",
    user: null,
    token: ''
};

const authReducer = ( state, action ) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                user: action.payload.user,
                status: 'authenticated',
                token: action.payload.token
            }
        case 'logout':
            return {
                ...state,
                user: null,
                status: 'not-authenticated',
                token: null
            }

        default:
            return state;
    }
}

const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(authReducer, authInicialState);
    const [user, setUser] = useState({
        name: 'Diego',
        age: '35'
    });
    const [data, setData] = useState({test: 'test data'});

    const adding = (data) => {
        dispatch({
            type: "login",
            payload: {
              user: data.user,
              token: data.token
            },
          });
    }

    const logout = (data) => {

        dispatch({
            type: "logout",
            payload: null,
          });
    }

    return <AuthContext.Provider value={{
        user,
        data,
        adding,
        state,
        logout
    }} {...props} />
};

export { AuthContext, AuthProvider };