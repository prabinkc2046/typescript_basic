import React from 'react'
import { useCartContext } from './CartContext'
export default function ShoppingCartTest() {
    const {state, dispatch} = useCartContext();
  return (
    <div>
        {state.cart.length === 0 ? (
            <p>Your cart is currently empty.</p>
        ) : (
            <>
            {state.cart.map((item) => (
                <li key={item.id}>
                    {item.name}
                    {item.price}
                    <button onClick={() => dispatch({type:'REMOVE', itemId: item.id})}>Remove</button>
                    <button onClick={() => dispatch({type:'UPDATE', itemId: item.id, newQuantity: item.quantity - 1})}>-</button>
                    {item.quantity}
                    <button onClick={() => dispatch({type: 'UPDATE', itemId: item.id, newQuantity: item.quantity + 1})}>+</button>
                </li>
            ))}
            </>
        )}

        <button onClick={() => dispatch({type: 'ADD', item: {id: 3, name: 'new item', price: 34, quantity: 1}})}>Add to card</button>

        <p>Total cost: ${state.cart.reduce((total, item) => { return total + item.price * item.quantity}, 0)}</p>
    </div>
  )
}
