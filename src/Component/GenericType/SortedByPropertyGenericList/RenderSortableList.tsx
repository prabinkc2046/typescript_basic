import React, { useState } from 'react'
import SortableList from './SortableList'

type SortableItem = {
    name: string;
    age: number;
}

const itemList: SortableItem[] = [
    {name:'Prabin', age:14},
    {name:'Hari', age: 34},
    {name:'rachel', age: 17}
]
export default function RenderSortableList() {
    const [sortedList, setSortedList] = useState(itemList);
    const sortProperty = "age";
    const handleSortingByAge = () => {
        const sorted = [...sortedList].sort((a, b) => {
            if(a[sortProperty] > b[sortProperty]) return 1;
            if(a[sortProperty] < b[sortProperty]) return -1;
            return 0;
        });
        setSortedList(sorted);
    }
  return (
    <div>
        <SortableList<SortableItem>
        sortedList={sortedList}
        sortByProperty={handleSortingByAge}
        sortProperty={sortProperty}
        renderItem={(user) => {
            return(
                <li>{user.name} - {user.age}</li>
            )
        }}
        />
    </div>
  )
}
