import React from 'react'
type ButtonPropType = {
    onClick: (id: number, event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({onClick}: ButtonPropType) {

  return (
    <>
    <button onClick={(event) => onClick(34, event)}>Click</button>
    </>
  )
}
