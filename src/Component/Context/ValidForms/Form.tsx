import React, { useState, useEffect } from "react";
import { useFormContext } from "./ValidFormsContext";
const FormStep1: React.FC = () => {
    const { state, dispatch } = useFormContext();
    const { step1Data, isValidStep1 } = state;
    const [firstName, setFirstName] = useState(step1Data.firstName);
    const [lastName, setLastName] = useState(step1Data.lastName);
    const [isTouched, setIsTouched] = useState(false); // Track whether the form fields have been interacted with

    // Effect to validate the form when user interacts with the fields
    useEffect(() => {
        if (isTouched) {
            const isValid = firstName.trim() !== '' && lastName.trim() !== '';
            dispatch({ type: 'VALIDATE_STEP1', isValid });
        }
    }, [dispatch, firstName, lastName, isTouched]);

    const handleNext = () => {
        setIsTouched(true); // Mark fields as touched to trigger validation
        dispatch({ type: 'UPDATE_STEP1_DATA', data: { firstName, lastName } });
        dispatch({ type: 'SET_STEP', step: 2 });
    };

    return (
        <div>
            <h2>Step 1: Personal Information</h2>
            <form>
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <br />
                {/* Enable button onClick to trigger validation */}
                <button type="button" onClick={handleNext} disabled={isValidStep1}>Next</button>
            </form>
        </div>
    );
};


const FormStep2: React.FC = () => {
    const { state, dispatch } = useFormContext();
    const { step2Data, isValidStep2 } = state;
    const [email, setEmail] = useState(step2Data.email);
    const [phoneNumber, setPhoneNumber] = useState(step2Data.phoneNumber);

    const handlePrevious = () => {
        dispatch({ type: 'SET_STEP', step: 1 });
    };

    const handleSubmit = () => {
        dispatch({ type: 'UPDATE_STEP2_DATA', data: { email, phoneNumber } });
        dispatch({ type: 'VALIDATE_STEP2', isValid: true });
        // Handle form submission logic here
    };

    return (
        <div>
            <h2>Step 2: Contact Information</h2>
            <form>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={handlePrevious}>Previous</button>
                <button type="button" onClick={handleSubmit} disabled={isValidStep2}>Submit</button>
            </form>
        </div>
    );
};

const FormConsumer: React.FC = () => {
    const { state } = useFormContext();
    const { step } = state;

    return (
        <div>
            {step === 1 && <FormStep1 />}
            {step === 2 && <FormStep2 />}
        </div>
    );
};

export default FormConsumer;
