import React from 'react'
type PrabinPropType = {
    children: React.ReactNode,
}
export default function Prabin(props: PrabinPropType) {
  return (
    <div>
        {props.children}
    </div>
  )
}
