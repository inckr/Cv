import React from "react";
import './portfolio.css'
import img1 from '../../varlıklar/1.jpg'
import img2 from '../../varlıklar/2.jpg'
import img3 from '../../varlıklar/3.jpg'
import img4 from '../../varlıklar/4.jpg'
import img5 from '../../varlıklar/5.jpg'
import img6 from '../../varlıklar/6.png'

const data = [
  {
    id: 1,
    image: img1,
    title: 'Vücut Kitle Endeksi (BMI)',
    github: 'https://github.com/inckr/vkiProject',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 2,
    image: img2,
    title: 'IOS Calculator',
    github: 'https://github.com/inckr/CalculatorIOS',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 3,
    image: img3,
    title: 'Single User Login',
    github: 'https://github.com/inckr/simpleUserLogin',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 4,
    image: img4,
    title: 'Counter Project',
    github: 'https://github.com/inckr/ReactCounter',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 5,
    image: img5,
    title: 'Android Calculator',
    github: 'https://github.com/inckr/AndroidCalculator',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 6,
    image: img6,
    title: 'Temperature Project',
    github: 'https://github.com/inckr/temperature',
    linkedin: 'https://linkedin.com'
  },
]




const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Örnek Projeler</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, linkedin})=>{
            return (
              <article id={id} className="portfolio__item">
        <div className="portfolio__images">
        <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="cta">
          <a href={github} className="btn" target="_blank">Github</a>
          <a href={linkedin} className="btn" target="_blank">LinkedIn</a>
          </div>
        </article>
            )
          })
        }
        
        </div>
    </section>
  );
};

export default Portfolio;
