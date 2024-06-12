import React from 'react'


type PersonListType = {
    personList : {
        firstName: string,
        lastName: string,
        age: number
    }[]
}

export default function PersonList({personList}: PersonListType) {
  return (
    <div>
        {personList.map((person) => {
            return (
                <>
                <span>{person.firstName}</span>
                <span>{person.lastName}</span>
                Age: {person.age}
                <br />
                </>
            )
        })}
    </div>
  )
}
