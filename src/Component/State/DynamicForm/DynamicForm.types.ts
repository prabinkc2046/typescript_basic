// define a type for form field
export type FormField = {
    id: string,
    label: string,
    value: string,
    validation: (value: string) => boolean
}

// define the state shape
export type FormState = {
    fields: FormField[],
    isValid: boolean
}

// define action type

export type Action = 
| {type:'ADD_FIELD', field: FormField}
| {type: 'REMOVE_FIELD', id: string}
| {type: 'UPDATE_FIELD', id: string, value: string}