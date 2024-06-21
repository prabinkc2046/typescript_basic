import React, { useEffect, useRef } from 'react'

export default function FocusOnTextField() {
    const textRef = useRef<HTMLInputElement | null>(null)
    const inputBoxRef = useRef<HTMLDivElement | null>(null)
    const buttonRef = useRef<HTMLButtonElement | null>(null)
    const handleFocus = () => {
        if(textRef.current){
            textRef.current.focus()
        }
    }

    const  handleClickOutside = (event: MouseEvent) => {
        if(inputBoxRef.current && !inputBoxRef.current.contains(event.target as Node)){
            buttonRef.current?.focus()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    },[])
  return (
    <div  ref={inputBoxRef}>
        <input type='text' ref={textRef}/>
        <button onClick={() => handleFocus()} ref={buttonRef}>click me</button>
    </div>
  )
}
