import React from 'react'

type ProfileCardPropType = {
    avatar: React.ReactNode
}
export default function ProfileCard({avatar}: ProfileCardPropType) {
  return (
    <div className='profileCard'>
        <div className='avatar'>
        {avatar}
        </div>
    </div>
  )
}
