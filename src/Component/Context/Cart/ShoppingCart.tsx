import React from 'react'
import { useCartContext } from './CartContext'
export default function ShoppingCart() {
    const {ADD_TOTAL, REMOVE, UPDATE, cart, ADD} = useCartContext();
  return (
    <div>
    {cart.length === 0? (
        <p>Your cart is empty.</p>
    ): (
        <>
        {cart.map(({id, name, price, quantity}) => (
            <div key={id}>
                <span>{name}</span>
                <span>{price}</span>
                <button onClick={() => UPDATE(id, quantity + 1)}>+</button>
                <span>{quantity}</span>
                <button onClick={() => UPDATE(id, quantity -1)}>-</button>
                <button onClick={() => REMOVE(id)}>Remove</button>
            </div>
        ))}
    
        </>
    )}
    <p>Total cost: ${ADD_TOTAL()}</p>
    </div>
  )
}
