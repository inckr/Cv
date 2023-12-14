import React from 'react'
import './deneyim.css'
import { HiMiniCheckBadge  } from "react-icons/hi2";



const Deneyim = () => {
  return (
    <section id='deneyim'>
      <h2>Deneyimler</h2>

      <div className="container deneyim__container">
        <div className="deneyim__frontend">
          <h3>Frontend Development</h3>
          <div className="deneyim__content">
            <article className='deneyim__details'>
            <HiMiniCheckBadge className='deneyim__details-icon'  />
            <h4>HTML</h4>
            </article>
            <article className='deneyim__details'>
            <HiMiniCheckBadge  className='deneyim__details-icon' />
            <h4>JavaScript</h4>
            </article>
            <article className='deneyim__details'>
            <HiMiniCheckBadge  className='deneyim__details-icon' />
            <h4>CSS</h4>
            </article>
            <article className='deneyim__details'>
            <HiMiniCheckBadge  className='deneyim__details-icon' />
            <h4>React</h4>
            </article>
            <article className='deneyim__details'>
            <HiMiniCheckBadge  className='deneyim__details-icon' />
            <h4>Bootstrap</h4>
            </article>
          </div>
        </div>

        <div className="deneyim__backend">
        <h3>Backend Development</h3>
          <div className="deneyim__content">
            <article className='deneyim__details'>
            <HiMiniCheckBadge  className='deneyim__details-icon' />
            <h4>C#</h4>
            </article>
            <article className='deneyim__details'>
            <HiMiniCheckBadge  className='deneyim__details-icon' />
            <h4>Node JS</h4>
            </article>
            <article className='deneyim__details'>
            <HiMiniCheckBadge  className='deneyim__details-icon' />
            <h4>Java</h4>
            </article>
            <article className='deneyim__details'>
            <HiMiniCheckBadge  className='deneyim__details-icon' />
            <h4>MySQL</h4>
            </article>
            <article className='deneyim__details'>
            <HiMiniCheckBadge  className='deneyim__details-icon' />
            <h4>SQL Server</h4>
            </article>
            <article className='deneyim__details'>
            <HiMiniCheckBadge  className='deneyim__details-icon' />
            <h4>Spring Boot</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Deneyim