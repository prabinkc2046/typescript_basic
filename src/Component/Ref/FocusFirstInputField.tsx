import React, { FormEvent, useEffect, useRef, useState } from 'react'

export default function FocusFirstInputField() {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const submitRef = useRef<HTMLInputElement | null>(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {
        if(nameRef.current){
            nameRef.current.focus();
        }
    },[])

    useEffect(() => {
        if(nameRef.current && name.length === 5){
            emailRef.current?.focus();
        }
    },[name])

    useEffect(() => {
        if(email.length === 5 && emailRef.current){
            submitRef.current?.focus();
        }
    },[email])

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const person = {
            id: Date.now(),
            name: name,
            email: email
        }
        setName("");
        setEmail("");
        if(nameRef.current){
            nameRef.current.focus()
        }
        console.log(person)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                name:
                <input type='text' placeholder='name' ref={nameRef} value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <br />
            <label>
                email:
                <input type='text' placeholder='email' ref={emailRef} value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <br />
            <input type='submit' value='submit' ref={submitRef}/>
        </form>
    </div>
  )
}
