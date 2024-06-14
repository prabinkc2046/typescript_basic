import React, { useState } from 'react'
import { UserProp, UserStateType} from './User.types'

export default function User({userData, handleLogin, handleLogout}: UserProp) {
  
  return (
    <div>
      {userData.isLoggedIn ? (
        <>
        <h2>Welcome {userData?.name}</h2>
        <span>{userData?.email}</span>
        </>
      ): (
        <>
        <h2>Please log in</h2>
        </>
      )}

      <button onClick={() => handleLogin()}>Log in</button> 
      <button onClick={() => handleLogout()}>Log out</button>
    </div>
  )
}
