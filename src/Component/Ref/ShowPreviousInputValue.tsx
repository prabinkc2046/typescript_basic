import React, { useEffect, useRef, useState } from 'react'

export default function ShowPreviousInputValue() {
    const [currentName, setCurrentName] = useState('');
    const currentNameRef = useRef<string | null>(null);
    
   const handleButtonClick = () => {
    if(currentName !== ""){
        currentNameRef.current = currentName;
        setCurrentName("");
    }
   }

    
  return (
    <div>
        <input type='text'value={currentName} onChange={(e) => setCurrentName(e.target.value)}/>
        <br />
        Previous Value: {currentNameRef.current ?? "not previous value"}
        <br />
        <button onClick={() => handleButtonClick()}>click</button>
    </div>
  )
}
