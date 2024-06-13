import React from 'react'

type GreetingPropType = {
    name: string
}
export default function Greeting({name}: GreetingPropType) {
  return (
    <div>
        <span>{name}</span>
    </div>
  )
}
