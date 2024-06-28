import React from 'react'


type CustomAlertProps = {
    message: string;
} & React.HTMLAttributes<HTMLDivElement>
export default function CustomAlert({message, ...props}: CustomAlertProps) {
  return (
    <div {...props}>
        {message}
    </div>
  )
}
