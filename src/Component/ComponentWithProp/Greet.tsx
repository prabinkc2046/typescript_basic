import React from 'react'
type GreetPropType = {
  isLoggedIn: boolean,
  name: string
}
export default function Greet({isLoggedIn, name} : GreetPropType) {
  return (
    <div>
      {isLoggedIn ? (
        <>
        Hello, {name}
        </>
      ) : (
        <>
        Hello, Guest!
        </>
      )}
    </div>
  )
}
