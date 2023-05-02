import React from 'react'
import './header.css'
import LOGO from '../../assets/high jott.png'

const Header = () => {
  return (
    <div className='header'>
            <img src={LOGO} alt="" />
            <h2>JOT THEM DOWN</h2>
    </div>
  )
}

export default Header