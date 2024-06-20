import React, { createContext, useContext, useReducer, useState } from "react";

type LoggedInUserState = {
    isLoggedIn: boolean,
    user: {
        name: string
    }
}
type AuthUserContextProp = {
    state: LoggedInUserState,
    dispatch: React.Dispatch<Action>
}

type Action = 
| ({type: 'logIn'})
| ({type: 'logOut'})
| ({type: 'set_name', name: string})


type AuthUserContextProviderProp = {
    children: React.ReactNode
}
const AuthUserContext = createContext<AuthUserContextProp>(
    {
        state: {
            isLoggedIn: false,
            user: {
                name: ""
            }
        },
        dispatch: () => {},
    }
);

export const useAuthUserContext = () => {
    return useContext(AuthUserContext)
}

const authReducer = (state: LoggedInUserState, action: Action): LoggedInUserState => {
    switch(action.type){
        case 'logIn':
            if (state.user.name.trim().length !== 0){
                return {
                    ...state,
                    isLoggedIn: true
                }
            } else {
                return state
            }
            
        case 'logOut': 
            return {
                ...state,
                isLoggedIn: false,
                user: {
                    name: ""
                }
            }
        
        case 'set_name':
            const userName = action.name;
            return {
                ...state,
                user: {
                    name: userName
                }
            }
        default:
            return state
    }
}
const initialState: LoggedInUserState = {
    isLoggedIn: false,
    user: {
        name: ""
    }
}
export const AuthUserContextProvider = ({children}: AuthUserContextProviderProp) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    return(
    <AuthUserContext.Provider value={{state, dispatch}}>
        {children}
    </AuthUserContext.Provider>
    )
}

