import React, { act, useReducer } from 'react'
import { Reducer } from './Reducer'
import { actionTypes } from './Reducer'
export default function ParentCounter() {
    const initialState = {count: 0}
    const [state, dispatch] = useReducer(Reducer, initialState)
    const handleIncrement = () => {
        dispatch({type: actionTypes.INCREMENT})
    }

    const handleDecrement = () => {
        dispatch({type: actionTypes.DECREMENT})
    }

  return (
    <div>
        <h2>Parent component</h2>
        <p>Count in parent component: {state.count}</p>
        <button onClick={() => handleIncrement()}>Increment</button>
        <button onClick={() => handleDecrement()}>Decrement</button>
        <button onClick={() => dispatch({type: actionTypes.RESET})}>Reset</button>
    </div>
  )
}
