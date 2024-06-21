import React, { useEffect, useRef } from 'react'

export default function StoringMutableObject() {
    const objRef = useRef<{name: string, age: number}>({name: "Rachel", age: 17})
    
        const updateAge = () => {
            if(objRef.current){
                objRef.current.age += 1;
                console.log(objRef.current.age)
            }
        }
       
return (
    <div>
        <p>my name is {objRef.current.name}</p>
        <p>I am {objRef.current.age} years old</p>
        <button onClick={() => updateAge()}>UpdateAge</button>
    </div>
  )
}
