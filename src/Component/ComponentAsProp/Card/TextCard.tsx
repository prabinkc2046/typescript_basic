import React from 'react'

export type TextCardProps = {
    text: string;
}
export default function TextCard({text}: TextCardProps) {
  return (
    <div>
        {text}
    </div>
  )
}
