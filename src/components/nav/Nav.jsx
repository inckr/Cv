import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoBookOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";
import { TiMessageTyping } from "react-icons/ti";
import { useState } from 'react';





const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav ('#')} className={activeNav === '#' ? 'active' : ''}><IoHomeOutline /></a>
      <a href="#about" onClick={() => setActiveNav ('#about')}className={activeNav === '#about' ? 'active' : ''}><CgProfile />
</a>
      <a href="#yetenek" onClick={() => setActiveNav ('#yetenek')} className={activeNav === '#yetenek' ? 'active' : ''}><IoBookOutline />
</a>
      <a href="#services" onClick={() => setActiveNav ('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav ('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiMessageTyping /></a>
    </nav>
  )
}

export default Nav