import React from 'react'
import './referans.css'
import { FaUserTie } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const Referans = () => {
  return (
    <section id='referans'>
      <h2>Referans</h2>

      <div className="container referans__container">
        <article className='referans'>
        <FaUserTie className='referans__icon' />
        <h4>Lorem, ipsum dolor.</h4> <br />
        <br /><MdWork className='referans__icon' />
        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, ut.</h5><br />
        <br /><MdOutlinePhoneAndroid className='referans__icon'/>
        <small>0555 555 55 55</small>
        </article>
        <article className='referans'>
        <FaUserTie className='referans__icon' />
        <h4>Lorem, ipsum dolor.</h4><br />
        <br /><MdWork className='referans__icon' />
        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, ut.</h5><br />
        <br /><MdOutlinePhoneAndroid className='referans__icon'/>
        <small>0555 555 55 55</small>
        </article>
        <article className='referans'>
        <FaUserTie className='referans__icon' />
        <h4>Lorem, ipsum dolor.</h4><br />
        <br /><MdWork className='referans__icon' />
        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, ut.</h5><br />
        <br /><MdOutlinePhoneAndroid className='referans__icon'/>
        <small>0555 555 55 55</small>
        </article>
        <article className='referans'>
        <FaUserTie className='referans__icon' />
        <h4>Lorem, ipsum dolor.</h4><br />
        <br /><MdWork className='referans__icon' />
        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, ut.</h5><br />
        <br /><MdOutlinePhoneAndroid className='referans__icon'/>
        <small>0555 555 55 55</small>
        </article>
      </div>
    </section>
  )
}

export default Referans