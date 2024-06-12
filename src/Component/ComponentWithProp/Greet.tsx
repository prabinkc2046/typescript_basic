import React from 'react'
type GreetPropType = {
  isLoggedIn: boolean,
  name: string,
  messageCount?: number
}
export default function Greet({isLoggedIn, name, messageCount = 0} : GreetPropType) {
  return (
    <div>
      {isLoggedIn ? (
        <>
        Hello, {name}, you have {messageCount} {messageCount !== 1 ? 'messages' : 'message' } in your inbox
        </>
      ) : (
        <>
        Hello, Guest!
        </>
      )}
    </div>
  )
}
