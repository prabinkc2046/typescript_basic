import React from 'react'

export type ParagraphCardProps = {
    paragraph: string;
}
export default function ParagraphCard({paragraph}: ParagraphCardProps) {
  return (
    <div>
        <p>{paragraph}</p>
    </div>
  )
}
