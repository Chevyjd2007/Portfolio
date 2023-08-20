import React from 'react'
import Textarea from '@mui/joy/Textarea';
import "./contact.css"
import shape1 from "../../assets/shape-1.png"

const Contact = () => {
  return (
   <section className="contact section" id="contact">
     <h2 className='section__title text-cs'>Reach me</h2>
        <p className='section__subtitle'>Let's <span>Talk </span>Interest</p>
        <div className="contact__container container grid">

        <form className="contact__form">
            <div className="contact__form-group grid">
                <div className="name__email__container">
                <div className="contact__form-div">
                    <label className="contact__form-tag text-cs">Your full name <b>*</b></label>
                    <Textarea className='text-area' size='lg' name='name' placeholder='name'   />
                </div>
                <div className="contact__form-div">
                    <label className="contact__form-tag text-cs">Your email <b>*</b></label>
                    <Textarea className='text-area' size='lg' name='email' placeholder='email' />
                </div>
                </div>
                <div className="contact__form-div">
                    <label className="contact__form-tag text-cs">Your subject <b>*</b></label>
                    <Textarea size='lg' className='text-area subject-area' name='subject' placeholder='subject'  />
                </div>
                <div className="contact__form-div contact__form-area">
                    <label className="contact__form-tag text-cs">Your message <b>*</b></label>
                    <Textarea size='lg' className='text-area-message' name='message' placeholder='message'  />
                </div>

                <div className="contact__submit">
                    <button className="btn text-cs">Send Message</button>
                </div>
            </div>   
            
        </form>
        </div>

        <div className="section__deco deco__right">
          <img src={shape1} alt='' className='shape'/>
        </div>
   </section>
  )
}

export default Contact