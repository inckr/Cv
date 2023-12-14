import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Deneyim from './components/deneyim/Deneyim'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Referans from './components/referans/Referans'
import Contact from './components/contact/Contact'
import Download from './components/download/Download'

const App = () => {
  return (
    <>
      <Header />
      <Nav/>
      <About/>
      <Deneyim/>
      <Services/>
      <Portfolio/>
      {/* <Referans/> */}
      <Contact/>
      <Download/>
    </>
  )
}

export default App