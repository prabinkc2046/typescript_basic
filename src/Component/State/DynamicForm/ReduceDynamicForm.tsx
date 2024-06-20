import { FormField, FormState, Action } from "./DynamicForm.types"
export const formReducer = (state: FormState, action: Action): FormState => {
    switch(action.type){
        case 'ADD_FIELD':
            return {
                ...state,
                fields: [...state.fields, action.field]
            };
        
        case 'REMOVE_FIELD':
            return {
                ...state,
                fields: state.fields.filter(field => field.id !== action.id)
            }
        
        case 'UPDATE_FIELD':
            const updatedFields = state.fields.map(field => field.id === action.id ? {...field, value: action.value} : field);
            const isValid = updatedFields.every(field => field.validation(field.value));
            return {
                ...state,
                fields: updatedFields,
                isValid
            }
        default:
            return state;
    }
}