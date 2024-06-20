import React, { useState } from 'react'
import { useAuthUserContext } from './AuthUserContext'

export default function AuthUserConsumer() {
    const  {state, dispatch} = useAuthUserContext()
    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'logIn'})
    }
  return (
    <>
    {/* if user is not logged in, display message to log in */}
        {!state.isLoggedIn && (
            <div>
                <h2>Welcome User, please log in to use service</h2>
                <form onSubmit={(e) =>handleFormSubmit(e)}>
                    <input type="text" value={state.user.name} onChange={(e)  => dispatch({type:'set_name', name: e.target.value}) }/>
                    <input type='submit' value="submit" />
                </form>
            </div>
        )}

    {/* if user is logged in, display their name and email */}
    {state.isLoggedIn && (
        <div>
            <h2>Welcome, {state.user.name}</h2>
            <button onClick={() => dispatch({type: 'logOut'})}>log out</button>
        </div>
    )}

    </>
  )
}
