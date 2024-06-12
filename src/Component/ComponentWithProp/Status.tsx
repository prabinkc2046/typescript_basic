import React from 'react'

type StatusPropType = {
  status: "loading" | "error" | "success",
}
export default function Status({status}: StatusPropType) {
  return (
    <div>
        {status === "loading" && (
            <p>Page is loading</p>
        )}
        {status === "error" && (
            <p>Error occured</p>
        )}
        {status === "success" && (
            <p> Page is loaded successfully</p>
        )}
    </div>
  )
}
