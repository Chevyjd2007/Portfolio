import React, {useState, } from 'react'
import Textarea from '@mui/joy/Textarea';
import "./contact.css"
import shape1 from "../../assets/shape-1.png"
import axios from 'axios';

const Contact = () => {
    // Variables to be submitted to send email
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    const validateForm = () => {
        const tempErrors = {};
        if (!name) tempErrors.name = 'required';
        if (!email) tempErrors.email = 'required';
        if (!subject) tempErrors.subject = 'required';
        if (!message) tempErrors.message = 'required';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    }

    // function responsible for submitting email
    const handleSubmit = () => [
        

    ]

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
                        <Textarea className='text-area' size='lg' name='name' placeholder='to-be-implemented' 
                        value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">Your email <b>*</b></label>
                        <Textarea className='text-area' size='lg' name='email' placeholder='to-be-implemented' 
                        value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className="contact__form-div">
                    <label className="contact__form-tag text-cs">Your subject <b>*</b></label>
                    <Textarea size='lg' className='text-area subject-area' name='subject' placeholder='to-be-implemented' 
                    value={subject} onChange={e => setSubject(e.target.value)}/>
                </div>
                <div className="contact__form-div contact__form-area">
                    <label className="contact__form-tag text-cs">Your message <b>*</b></label>
                    <Textarea size='lg' className='text-area-message' name='message' placeholder='to-be-implemented'   
                    value={message} onChange={e => setMessage(e.target.value)}/>
                </div>

                <div className="contact__submit">
                    <button className="btn text-cs" onClick={validateForm}>Send Message</button>
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