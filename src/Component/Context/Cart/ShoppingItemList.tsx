import React from 'react'
import { useCartContext } from './CartContext'

const products = [
    {
        id: 1,
        name: "Quiet1",
        quantity: 1,
        price: 88
    },
    {
        id: 2,
        name: "Quiet2",
        quantity: 1,
        price: 88
    },
    {
        id: 3,
        name: "Quiet3",
        quantity: 1,
        price: 88
    },
    {
        id: 4,
        name: "Quiet4",
        quantity: 1,
        price: 88
    }
]
export default function ShoppingItemList() {
    const {ADD} = useCartContext()
  return (
    <div>
        {products.map(item  => (
            <li key={item.id}>
                <span>{item.name}</span>
                <span>{item.price}</span>
                <button onClick={() => ADD(item)}>Add to cart</button>
            </li>
        ))}
    </div>
  )
}
