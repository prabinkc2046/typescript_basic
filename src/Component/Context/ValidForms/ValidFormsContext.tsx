import React, { createContext, useContext, useReducer } from "react";

// Define types for the form data and state
type FormStep1Data = {
    firstName: string;
    lastName: string;
};

type FormStep2Data = {
    email: string;
    phoneNumber: string;
};

type FormState = {
    step: number;
    step1Data: FormStep1Data;
    step2Data: FormStep2Data;
    isValidStep1: boolean;
    isValidStep2: boolean;
};

type Action =
    | { type: 'SET_STEP', step: number }
    | { type: 'UPDATE_STEP1_DATA', data: Partial<FormStep1Data> }
    | { type: 'UPDATE_STEP2_DATA', data: Partial<FormStep2Data> }
    | { type: 'VALIDATE_STEP1', isValid: boolean }
    | { type: 'VALIDATE_STEP2', isValid: boolean };

// Initial state
const initialState: FormState = {
    step: 1,
    step1Data: { firstName: '', lastName: '' },
    step2Data: { email: '', phoneNumber: '' },
    isValidStep1: false,
    isValidStep2: false,
};

// Context creation
const FormContext = createContext<{
    state: FormState;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => {}
});

// Reducer function
const formReducer = (state: FormState, action: Action): FormState => {
    switch (action.type) {
        case 'SET_STEP':
            return { ...state, step: action.step };
        case 'UPDATE_STEP1_DATA':
            return { ...state, step1Data: { ...state.step1Data, ...action.data } };
        case 'UPDATE_STEP2_DATA':
            return { ...state, step2Data: { ...state.step2Data, ...action.data } };
        case 'VALIDATE_STEP1':
            return { ...state, isValidStep1: action.isValid };
        case 'VALIDATE_STEP2':
            return { ...state, isValidStep2: action.isValid };
        default:
            return state;
    }
};

// Provider component
export const FormContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    );
};

// Custom hooks for consuming form context
export const useFormContext = () => useContext(FormContext);

// Example usage:
// You can now use `FormContextProvider` as a wrapper around your form components
// and use `useFormContext` to access the form state and dispatch actions.
