import React from 'react'

export type ImageCardProps = {
    imageUrl: string;
}
export default function ImageCard({imageUrl}: ImageCardProps) {
  return (
    <div>
        <img src={imageUrl} alt='Image card'/>
    </div>
  )
}
