import React from 'react'

type SortableListProps<T> = {
    sortedList: T[];
    sortByProperty: () => void;
    sortProperty: keyof T;
    renderItem: (item: T) => React.ReactNode;
}
export default function SortableList<T>({sortByProperty, renderItem, sortedList, sortProperty}:SortableListProps<T>) {
  return (
    <div>
        {sortedList.map((item) => {
            return(
                renderItem(item)
            )
        })}
        <button onClick={() => sortByProperty()}>Sort by {sortProperty as string}</button>
    </div>
  )
}
