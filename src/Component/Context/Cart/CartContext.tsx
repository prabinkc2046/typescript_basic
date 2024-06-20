import React, { createContext, useContext, useState } from "react"

type CartItem = {
    id: number,
    name: string,
    quantity: number,
    price: number
}

type CartContextType = {
    cart: CartItem[],
    ADD: (item: CartItem) => void,
    REMOVE: (itemId: number) => void,
    UPDATE: (itemId: number, newQuantity: number) => void,
    ADD_TOTAL: () => number,
}

type CartContextProviderProp = {
    children: React.ReactNode
}
export const CartContext = createContext<CartContextType>({
    cart: [],
    ADD: () => {},
    REMOVE: () => {},
    UPDATE: () => {},
    ADD_TOTAL: () => 0,
});

export const CartContextProvider = ({children}: CartContextProviderProp) => {
        const [cart, setCart] = useState<CartItem[]>([])

        // method to add item to the cart
        const ADD = (item: CartItem) => {
            if (!cart.includes(item)){
            setCart(prevCart => [...prevCart, item])
            } else {
                return cart
            }          
        }

        // method to remove item from the cart
        const REMOVE = (itemID: number) => {
            setCart(prevCart => 
                prevCart.filter(item => item.id !== itemID)
            )
        }

        const UPDATE = (itemId: number, newQuantity: number) => {
            if (newQuantity === 0){
                setCart(cart =>
                    cart.filter(item => item.id !== itemId)
                )
            } else {
                setCart(cart => 
                    cart.map(item => item.id === itemId ? {...item, quantity: newQuantity} : item)
                )
            }
        }
        
        const ADD_TOTAL = () => {
            return cart.reduce((total, item) => {
                return total + item.price * item.quantity
            }, 0)
        }

        
        // method to update the item quanity by 1
    return(<CartContext.Provider value={{cart, ADD, REMOVE, UPDATE, ADD_TOTAL}}>
        {children}
        </CartContext.Provider>)
}

export const useCartContext = () => {return useContext(CartContext)};


