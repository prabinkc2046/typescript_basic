import React, { useRef, useState } from 'react'

type FormPropType = {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    formData: {
        name: string,
        email: string,
        salary: number
    }
}
export default function Form({onSubmit, onChange, formData}: FormPropType) {
    
  return (
    <>
    <form onSubmit={onSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'start'}}>
        <input  type='text'  name="name" value={formData.name} onChange={onChange} placeholder='name'/>
        <input type='email' name='email' value={formData.email} onChange={onChange} placeholder='email'/>
        <input  type='number' name='salary' value={formData.salary} onChange={onChange} placeholder='salary'/>
        <input type='submit'/>
    </form>
    </>
  )
}
