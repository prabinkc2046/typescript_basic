import React from 'react'

import { ProductListProp } from './ProductList.types'

export default function ProductList({products}: ProductListProp) {
  return (
    <div>
        {products.map((product) => (
            <li key={product.id}>{product.name} - {product.price}</li>
        ))}
    </div>
  )
}
