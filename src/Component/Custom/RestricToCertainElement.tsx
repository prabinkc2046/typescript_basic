import React from 'react'

type allowedWrappers = 'div' | 'section' | 'h2'

type RestricToCertainElementProps = {
    element: allowedWrappers;
    children: React.ReactNode;
}
export default function RestricToCertainElement({element: Element, children}: RestricToCertainElementProps) {
  return (
    <Element>
        {children}
    </Element>
  )
}
