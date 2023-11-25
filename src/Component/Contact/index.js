import React, { Fragment } from 'react'
import Footer from '../Footer'
import './style.css'

export default function Contact() {
  return (
    <Fragment>
    <div className='contact'>
    <h1 className='contact-title'>Drop<span>Me A line</span></h1>  
<div className='container'>
<form className='contact-form'>
  <div className='form-input'>
  <input type='text' placeholder='Your Name'/>
  <input type='email' placeholder='Your email'/>
  </div>
  <div> 
    <div className='contact-subject'>
    <input type='text' placeholder='Your Subject'/>
    </div>
    <div className='contact-textarea'>
    <textarea cols="30" rows="10" placeholder='Your Message'></textarea>
    <input type='submit'value="Send Message"/>
    </div>

  </div>
</form>
</div>
    </div>
    <Footer/>
    </Fragment>
  )
}
