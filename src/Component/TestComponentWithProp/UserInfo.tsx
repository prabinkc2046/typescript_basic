import React from 'react'


type UserInfoProp = {
    user: {
        name: string,
        age: number
    }
}
export default function UserInfo({user}: UserInfoProp) {
  return (
    <div>
        {user.name} - {user.age}
    </div>
  )
}
