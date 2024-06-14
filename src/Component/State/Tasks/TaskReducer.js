export const actionTypes = {
    ADD_TASK: 'ADD_TASK',
    DELETE_TASK: 'DELETE_TASK',
    EDIT_TASK: 'EDIT_TASK'
}

export const TaskReducer = (state, action) => {
    switch(action.type){
        case actionTypes.ADD_TASK:
            return [...state, action.payload]
        
        case actionTypes.DELETE_TASK:
            return state.filter((item) => item.id !== action.payload.id)
        
        case actionTypes.EDIT_TASK:
            return state.map((item) => item.id === action.payload.id ? {...item, ...action.payload} : item)
        default:
            return state
    }
}






