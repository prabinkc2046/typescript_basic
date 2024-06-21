import React, { useEffect, useRef, useState } from 'react'

export default function Focus() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [input, setInput] = useState('prabin');
    

    useEffect(() => {
        if(inputRef.current){
          inputRef.current.select();
          inputRef.current.focus();
        }
    },[])

    console.log(inputRef.current?.value)
  return (
    <div>
        <input type='text' ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)}/>
    </div>
  )
}
