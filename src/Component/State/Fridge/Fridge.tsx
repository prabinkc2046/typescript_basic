import React, { useReducer } from 'react'
import { FridgeReducer } from './FridgeReducer'
export default function Fridge() {
const [state, dispatch] = useReducer(FridgeReducer, {items: []})
  return (
    <div>
        {state.items.map(item => (
            <li key={item.id}>{item.name}
            <button onClick={() => dispatch({type:'REMOVE', payload: item.id})}>delete</button>
            <button onClick={() => dispatch({type:'UPDATE', payload: {id: item.id, name:"Updated name"}})}>edit</button>
            </li>
        ))}
        <button onClick={() => dispatch({type:'ADD', payload:{id: Date.now(), name:'New Task'}})}>Add</button>
    </div>
  )
}
