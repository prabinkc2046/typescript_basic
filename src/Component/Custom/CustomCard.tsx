import React from 'react'


type CustomCardProps = {
    title: string;
} & React.HTMLAttributes<HTMLDivElement>
export default function CustomCard({title, children, ...props}: CustomCardProps) {
  return (
    <div {...props}>
        {title}
        {children}
    </div>
  )
}
