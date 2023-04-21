import React from 'react'
import userImg from '../../assets/user.jpg'

import './UserInfo.scss'
export default function UserInfo() {

  return (
    <div className='user_info__container'>
            <img  className='user__img'src={userImg} alt="user pics" />
            <span className='user__name'>Source</span>
            <span className='user__number'>3</span>
    </div>
  )
}
