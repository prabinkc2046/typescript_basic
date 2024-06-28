import React, { useState } from 'react'


type GenericeListComponenetProps<T> = {
  list: T[];
  // sortByProperty: (property: string) => void;
  renderItem: (item: T) => React.ReactNode;
}
export default function GenericListComponenet<T extends {age: number}>({list, renderItem}: GenericeListComponenetProps<T>) {
  const [sortedItem, setSortedItem] = useState(list);

  const sortByProperty = (sortProperty: keyof T) => {
    const sortedByAge = [...sortedItem]
        .sort((a, b) => {
        if(a[sortProperty] > a[sortProperty]) return 1;
        if(a[sortProperty] < a[sortProperty]) return -1;
        return 0;
      });
    setSortedItem(sortedByAge);
    console.log(sortedByAge);
  }
  return (
    <div>
      {list.map((item, index) => {
        return(
          renderItem(item)
        )
      })}

      {sortedItem.map((item, index) => {
        return(
          renderItem(item)
        )
      })}
      <button onClick={() => sortByProperty('age' as keyof T)}>sort</button>
    </div>
  )
}
