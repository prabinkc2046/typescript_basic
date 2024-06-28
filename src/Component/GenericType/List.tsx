import React, { ReactNode } from 'react'
import { StringLiteral } from 'typescript';

type ListProps<T> = {
    itemList: T[];
    onClick: (value: T)  => void;
}

type Person = {
    id: number;
    name: string;
}
export default function List <T extends {id: number, name: string}>({itemList, onClick}: ListProps<T>) {
  return (
    <div>
        <h2>List of Items</h2>
        {itemList.map((item, index) => {
            return(
                <ul>
                    <li key={item.id} onClick={() => onClick(item)}>{item.name}</li>
                </ul>
            )
        })}
    </div>
  )
}
