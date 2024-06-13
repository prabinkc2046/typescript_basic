import React from 'react'

type PlaceHolderProp = {
    children?: React.ReactNode
}
export default function PlaceHolder({children}: PlaceHolderProp) {
  return (
    <div>
        {children ? (
            children
        ) : (
            <div>...Loading</div>
        )}
    </div>
  )
}
