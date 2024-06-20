import React, { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./CartReducer";
import { CartItem } from "./CartReducer";
import { CartState, CartAction } from "./CartReducer";
type CartContextProviderTestProp = {
    children: React.ReactNode
}


type CartContextProp = {
    state: CartState,
    dispatch: React.Dispatch<CartAction>,
}

const initialState: CartState = {cart: [{id: 3, name: 'new item', price: 34, quantity: 1}]};

const CartContext = createContext<CartContextProp>({
    state: initialState,
    dispatch: () => {},
});

export const CartContextProviderTest = ({children}: CartContextProviderTestProp) => {
    const [state, dispatch] = useReducer(cartReducer, initialState );
    return(
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}