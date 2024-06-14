type Item = {
    id: number,
    name: string
}

type State = {
    items: Item[]
}

type Action = 
| {type: "ADD", payload: Item}
| {type: 'REMOVE', payload: number}
| {type: 'UPDATE', payload: Partial<Item>}

export const FridgeReducer = (state: State, action: Action ): State => {
    switch(action.type){
    case 'ADD':
            return {...state, items: [...state.items, action.payload]}
    
    case 'REMOVE':
        return {...state, items: state.items.filter(item => item.id !== action.payload)}
    
    case 'UPDATE':
        return {...state, items: state.items.map(item =>
            item.id === action.payload.id ? {...item, ...action.payload} : item
        )}

    default:
        return state
    }
}