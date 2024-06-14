import React, { useReducer } from 'react'
import { TaskReducer, actionTypes } from './TaskReducer';
export default function TaskList() {
    const initialState = [];
    const [state, dispatch] = useReducer(TaskReducer, initialState)
    const handleAdd = () => {
        dispatch({type: actionTypes.ADD_TASK, payload: {id: Date.now(), taskName:'new task'}})
    }
    const handleDelete = (id) => {
        dispatch({type: actionTypes.DELETE_TASK, payload: {id: id}})
    }
    const handleEdit = (id, updatedTask) => {
        dispatch({type: actionTypes.EDIT_TASK, payload:{id: id, taskName: updatedTask}})
    }
  return (
    <div>
        {state.map((task) => (
            <li key={task.id}>{task.taskName} 
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <button onClick={() => handleEdit(task.id, "Edited task")}>Edit</button>
            </li>
        ))}
        <button onClick={() => handleAdd()}>Add</button>
    </div>
  )
}
