import React from 'react'

type ItemListPropType = {
    itemList: string []
}

export default function ItemList({itemList}: ItemListPropType) {
  return (
    <ul>
        {itemList.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
  )
}
