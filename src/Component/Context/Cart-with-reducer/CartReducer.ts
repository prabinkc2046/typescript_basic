import { setMaxListeners } from "events"

export type CartItem = {
    id: number,
    name: string,
    price: number,
    quantity: number
}

export type CartState = {cart: CartItem[]}

export type CartAction = 
| {type:'REMOVE', itemId: number}
| {type: 'UPDATE', itemId: number, newQuantity: number}
| {type: 'ADD', item: CartItem}

export const cartReducer = (state: CartState, action: CartAction) => {
    switch(action.type){
        case 'ADD':
            if(state.cart.some(item => item.id !== action.item.id)){
                return {
                    ...state,
                    cart: [...state.cart, action.item]
                }
            } else {
                return state
            }
            
        
        case 'REMOVE': 
            return {
                ...state,
                cart: state.cart.filter(item =>
                    item.id !== action.itemId
                )
            }
        
        case 'UPDATE':
            if (action.newQuantity === 0){
                return {
                    ...state,
                    cart: state.cart.filter(item => 
                        item.id !== action.itemId
                    )
                }
            } else {
                return {
                    ...state,
                    cart: state.cart.map(item => 
                        item.id === action.itemId ? {...item, quantity: action.newQuantity} : item
                    )
                }
            }
        
        default:
            return state
    }
}