import React from 'react'
import { CommentSectionProps } from './CommentSecion'

type PostProps = {
    component: React.ComponentType<CommentSectionProps>,
    isCommented: Boolean,
}
export default function Post({component: CommentSection, isCommented}: PostProps) {
  if (isCommented){
    return <CommentSection id={2}/>
  } else {
    return <div> no comment</div>
  }
}
