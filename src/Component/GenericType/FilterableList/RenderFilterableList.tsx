import React from 'react'
import FilterableList from './FilterableList'
import { StringLiteral } from 'typescript';


type Product = {
    id: number;
    name: string;
    price: number
}


const total: Product[] = [
    {id: 1, name: "coffee", price: 20},
    {id: 2, name: "milk", price: 25},
    {id: 3, name: "milk bar", price: 15},
    {id: 4, name: "banana", price: 18},
    {id: 5, name: "banana biscuits", price: 40}
]
export default function RenderFilterableList() {
  return (
    <>
    <FilterableList<Product> products={total}/>
    </>
  )
}
