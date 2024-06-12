import React from 'react'
type HeadingPropsType = {
    children: string,
}
export default function Heading(prop: HeadingPropsType) {
  return (
    <h2>{prop.children}</h2>
  )
}
