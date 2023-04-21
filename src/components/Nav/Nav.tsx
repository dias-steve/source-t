import React from 'react'
import './Nav.scss'
import logo from '../../assets/logo.svg'
import UserInfo from '../UserInfo/UserInfo'


function Nav() {
  return (
    <nav className='nav__global_container'>
        <img className='nav__logo' src={logo} alt='logo'/>
        <div className='nav__user_info_container'>
            <UserInfo />
        </div>

    </nav>
  )
}

export default Nav
