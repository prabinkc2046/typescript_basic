import React from 'react'
type ProductListProp = {
    products: {
        id: number,
        name: string,
        price: number
    }[]
}
export default function ProductList({products}: ProductListProp) {
  return (
    <div>
        {products.map((product) => (
            <li key={product.id}>{product.name} - {product.price}</li>
        ))}
    </div>
  )
}
