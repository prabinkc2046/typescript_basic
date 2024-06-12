import React, { useState } from 'react'

type InputEventPropType = {
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputEvent({value, handleChange}: InputEventPropType) {
    
  return (
    <>
    <input type='text' value={value} onChange={(event) =>handleChange(event)}/>
    </>
  )
}
