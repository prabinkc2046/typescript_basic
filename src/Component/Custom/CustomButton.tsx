import React from 'react'

type CustomeButtonProps = {
  children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>

export default function CustomButton( {children, ...props}: CustomeButtonProps) {
    return (
    <button {...props}>{children}</button>
  )
}
