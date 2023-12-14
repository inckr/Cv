import React from 'react'
import CV from '../../varlıklar/cv.pdf'
import './download.css'

const Download = () => {
  return (
    <section id='download'>
      <a href={CV} download className='btn download'>CV'yi İndir</a>
    </section>
  )
}

export default Download