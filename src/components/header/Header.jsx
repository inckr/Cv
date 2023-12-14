import React from 'react'
import './header.css'
import ME from '../../varlıklar/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Merhaba! Ben,</h5>
        <h1>Ahmet İncekara</h1>
        <h5 className='text-light'>Fullstack Developer</h5>

<HeaderSocials/>

<div className="me">
  <img src={ME} alt="" />
</div>

<a href="#contact" className='scroll__down'>Aşağı Kaydır</a>
      </div>
    </header>
  )
}

export default Header