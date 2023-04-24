import React from 'react'
import logo from '../images/crackDSA (1).png'
import Links from './Links'

const Header = () => {
  return (
    <>
    <header className="header">
        <img src={logo} className='logo' alt="image"></img>
        <Links />
    </header>
    </>
  )
}

export default Header