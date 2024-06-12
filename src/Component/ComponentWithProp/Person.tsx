import React from 'react'

type PersonPropType = {
    person : {
        firstName: string,
        lastName: string,
    }
}
export default function Person({person}: PersonPropType) {
  return (
    <div>
        <span>{person.firstName}</span>
        <span>{person.lastName}</span>
    </div>
  )
}
