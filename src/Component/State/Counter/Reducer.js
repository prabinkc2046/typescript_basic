export const actionTypes = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}

export const Reducer = (state, action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            return {count: state.count + 1}
        case actionTypes.DECREMENT:
            return {count: state.count -1}
        case actionTypes.RESET:
            return {count: 0}
        default:
            return state
    }
}
