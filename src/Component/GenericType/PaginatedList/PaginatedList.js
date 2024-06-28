import React, { useState } from 'react'

const items = [
    {id: 1, title: 'title 1'},
    {id: 2, title: 'title 2'},
    {id: 3, title: 'title 3'},
    {id: 4, title: 'title 4'},
    {id: 5, title: 'title 5'},
    {id: 6, title: 'title 6'},
    {id: 7, title: 'title 7'},
    {id: 8, title: 'title 8'}
]

export default function PaginatedList() {
    const itemPerPage = 2;
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0 + itemPerPage)
    const [isDisabledNext, setisDisabledNext] = useState(false);
    const [isDisablePrev, setIsDisbalePrev] = useState(false);
    const handleNextpage = () => {
        if (items.length - end + 1 > itemPerPage){
            setStart(end);
            setEnd(end + itemPerPage);
        } else {
            setisDisabledNext(true)
        }
    }

    const handlePreviousPage = () => {
        if(start - itemPerPage >= 0){
            setStart(start - itemPerPage);
            setEnd(start)
            setisDisabledNext(false)
        } else {
            setIsDisbalePrev(true)
        }
    }
  return (
    <div>
        {items.map(item => (
            <li key={item.id}>{item.title}</li>
        ))}

        <h2>Two items per page</h2>
        {items.slice(start, end).map(item => (
            <li key={item.id}>{item.title}</li>
        ))}
        <button onClick={() => handleNextpage()} disabled={isDisabledNext}>Next 2 items</button>
        <button onClick={() => handlePreviousPage()}>Previous Page</button>
    </div>
  )
}
