import React, { useEffect, useRef } from 'react'

export default function ClickMeOrNot() {
    const clickArea = useRef<HTMLDivElement>(null);

    const sayWhatIsClicked = (event: MouseEvent) => {
        if (clickArea.current && clickArea.current.contains(event.target as Node)){
            clickArea.current.style.backgroundColor= "red"
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', sayWhatIsClicked);
        return () => {
            document.removeEventListener('mousedown', sayWhatIsClicked)
        }
    },[])
    
  return (
    <div style={{backgroundColor:'lightblue'}} ref={clickArea}>
        <ul>
            <li>prabin</li>
            <li>Shaym</li>
            <li>Sita</li>
        </ul>
    </div>
  )
}
