export const actionTypes = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}

type State = {
    counter: number
}

type Action = 
| {type: 'INCREMENT'}
| {type: 'DECREMENT'}
| {type: 'RESET'}

export const CounterReducer = (state: State, action: Action): State => {
    switch(action.type){
        case 'INCREMENT':
            return {...state, counter: state.counter + 1}
        case 'DECREMENT':
            return {...state, counter: state.counter -1}
        case 'RESET':
            return {...state, counter: 0}
        default:
            return state
    }
}

