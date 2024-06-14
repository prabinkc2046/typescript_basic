import React, { useReducer } from 'react'
import { CounterReducer } from './CounterReducer'
export default function Counter() {
const [state, dispatch] = useReducer(CounterReducer, {counter: 0})
  return (
    <div>
        <span>Current count {state.counter}</span>
        <button onClick={() => dispatch({type:'INCREMENT'})}>Increment</button>
        <button onClick={() => dispatch({type:'DECREMENT'})}>Decrement</button>
        <button onClick={() => dispatch({type:'RESET'})}>Reset</button>
    </div>
  )
}
