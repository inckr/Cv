import React from 'react'
import './yetenek.css'
import { HiMiniCheckBadge  } from "react-icons/hi2";



const Yetenek = () => {
  return (
    <section id='yetenek'>
      <h2>Yetenekler</h2>

      <div className="container yetenek__container">
        <div className="yetenek__frontend">
          <h3>Frontend Development</h3>
          <div className="yetenek__content">
            <article className='yetenek__details'>
            <HiMiniCheckBadge className='yetenek__details-icon'  />
            <h4>HTML</h4>
            </article>
            <article className='yetenek__details'>
            <HiMiniCheckBadge  className='yetenek__details-icon' />
            <h4>JavaScript</h4>
            </article>
            <article className='yetenek__details'>
            <HiMiniCheckBadge  className='yetenek__details-icon' />
            <h4>CSS</h4>
            </article>
            <article className='yetenek__details'>
            <HiMiniCheckBadge  className='yetenek__details-icon' />
            <h4>React</h4>
            </article>
            <article className='yetenek__details'>
            <HiMiniCheckBadge  className='yetenek__details-icon' />
            <h4>Bootstrap</h4>
            </article>
          </div>
        </div>

        <div className="yetenek__backend">
        <h3>Backend Development</h3>
          <div className="yetenek__content">
            <article className='yetenek__details'>
            <HiMiniCheckBadge  className='yetenek__details-icon' />
            <h4>C#</h4>
            </article>
            <article className='yetenek__details'>
            <HiMiniCheckBadge  className='yetenek__details-icon' />
            <h4>Node JS</h4>
            </article>
            <article className='yetenek__details'>
            <HiMiniCheckBadge  className='yetenek__details-icon' />
            <h4>Java</h4>
            </article>
            <article className='yetenek__details'>
            <HiMiniCheckBadge  className='yetenek__details-icon' />
            <h4>MySQL</h4>
            </article>
            <article className='yetenek__details'>
            <HiMiniCheckBadge  className='yetenek__details-icon' />
            <h4>SQL Server</h4>
            </article>
            <article className='yetenek__details'>
            <HiMiniCheckBadge  className='yetenek__details-icon' />
            <h4>Spring Boot</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Yetenek;