import React, { useEffect, useRef, useState } from 'react'

export default function KeepingTrackOfPreviousValue() {
    const [count, setCount] = useState<number>(0);
    const prevCountRef = useRef<number | null>(null)

    useEffect(() => {
        prevCountRef.current = count;
    })

  return (
    <>
        Current value: {count}
        <br />
        previousValue: {prevCountRef.current}
        <br />
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Change Count</button>
    </>
  )
}
