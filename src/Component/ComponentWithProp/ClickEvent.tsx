import React from 'react'

const link = [
    {id: 1, name:"task 1"},
    {id: 2, name:"task 2"},
    {id: 3, name:"task 3"}
]

type ClickEventPropType = {
    handleClick: (id: number, event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function ClickEvent({handleClick}: ClickEventPropType) {
    
  return (
    <div>
        {link.map((item) => {
            return (
                <button onClick={(event) => handleClick(item.id, event)} key={item.id}>{item.name}</button>
            )
        })}
    </div>
  )
}
