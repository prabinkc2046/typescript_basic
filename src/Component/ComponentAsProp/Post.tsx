import React from 'react'
import { CommentSectionProps } from './CommentSecion'

type PostProps = {
    component: React.ComponentType<CommentSectionProps>,
    isCommented: Boolean,
}
export default function Post({component: CommentSectionComponent, isCommented}: PostProps) {
  if (isCommented){
    return <CommentSectionComponent id={2}/>
  } else {
    return <div> no comment</div>
  }
}
