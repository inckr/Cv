import React, {useState, useEffect} from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Yetenek from './components/yetenek/Yetenek'
import Services from './components/services/Services'
import Projeler from './components/projeler/Projeler'
import Referans from './components/referans/Referans'
import Contact from './components/contact/Contact'
import Download from './components/download/Download'
import axios from 'axios'

const App = () => {
  return (
    <>
      <Header />
      <Nav/>
      <About/>
      <Yetenek/>
      <Services/>
      <Projeler/>
      {/* <Referans/> */}
      <Contact/>
      <Download/>
    </>
  )
}

export default App