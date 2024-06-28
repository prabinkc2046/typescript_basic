import React from 'react'


type CustomInputProps = React.InputHTMLAttributes<HTMLInputElement>
export default function CustomInput(props: CustomInputProps){
  return (
    <input {...props}/>
  )
}
