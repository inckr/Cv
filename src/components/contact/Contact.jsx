import React from 'react'
import './contact.css'
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";




const Contact = () => {
  return (
    <section id='contact'>
      <h2>İletişim</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <a href="mailto:ahmetincekaraa@gmail.com">
          <article className='contact__option'>
          <CiMail className='contact__icon'/> <br />
            <h4>Email</h4> <br />
            <h5>ahmetincekaraa@gmail.com </h5> <br />
            <a href="mailto:ahmetincekaraa@gmail.com" target='_blank'>Mail Gönder</a>
          </article>
          </a>
          {/* <article className='contact__option'>
          <FaWhatsapp className='contact__icon'/> <br />
            <h4>WhatsApp</h4> <br />
            <h5>+90 507 408 63 62 </h5> <br />
            <a id='wp' href="https://wa.me/+905074086362" target='_blank'>Mesaj Gönder</a>
          </article> */}
          <a href="https://linkedin.com/in/ahmetincekaraa" target='_blank'>
          <article className='contact__option'>
          <CiLinkedin className='contact__icon'/> <br />
            <h4>LinkedIn</h4> <br /> <h5>../ahmetincekaraa</h5>
             <br />
            <a id='linkedin' href="https://linkedin.com/in/ahmetincekaraa" target='_blank'>Profile Git</a>
          </article>
          </a>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Adınız Soyadınız..' required />
          <input type="email" name="email" id="email" placeholder='Mail Adresiniz..' required />
          <textarea name="message"  rows="10" placeholder='Mesajınız..' required></textarea>
          <button type='submit' className='btn btn-primary'>Gönder</button>
        </form>
      </div>
    </section>
  )
}

export default Contact