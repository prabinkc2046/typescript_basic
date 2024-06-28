import React from 'react'


type CustomButtonWithMorePropsProps = {
    label: string;
    isActive: boolean;
} & React.HTMLAttributes<HTMLButtonElement>

export default function CustomButtonWithMoreProps({label, isActive, ...props}: CustomButtonWithMorePropsProps) {
  return (
    <button className={isActive ? 'active' : 'inActive'} {...props}>{label}</button>
  )
}
