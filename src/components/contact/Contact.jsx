import React, {useState, } from 'react'
import Textarea from '@mui/joy/Textarea';
import "./contact.css"
import shape1 from "../../assets/shape-1.png"
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Contact = () => {
    //Variables for the snackbar and validation
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    // Variables to be submitted to send email
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // Confirms contact form is properly filled
    const validateForm = () => {
        const tempErrors = {};
        if (!name) tempErrors.name = 'required';
        if (!email) tempErrors.email = 'required';
        if (!subject) tempErrors.subject = 'required';
        if (!message) tempErrors.message = 'required';

        setErrors(tempErrors);

        // The form isn't validated if tempErrors isn't empty
        return Object.keys(tempErrors).length === 0;
    }

    // function responsible for submitting email. Also handling submission errors.
    const handleSubmit = () => {
        const contact = {name, email, subject, message};
        if (validateForm()) {
        console.log("Submiting ",  email)
        axios.post("Node-mailer-server-env.eba-idhskw3a.us-east-2.elasticbeanstalk.com/api/contactMe", contact)
        .then(response => {console.log(response)

        if (response.data.response === "Email has been sent!") {
            setOpen(true);
            setSuccess(true);
        } else {
            setOpen(true);
            setSuccess(false);
        }
        })

        .catch(error => { console.error(error)
            setOpen(true);
            setSuccess(false);
            });
        }
}

//Function to handle closing the snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

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
                        <Textarea className='text-area' size='lg' name='name' placeholder='name' 
                        value={name} onChange={e => setName(e.target.value)} error={!!errors.name}/>
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">Your email <b>*</b></label>
                        <Textarea className='text-area' size='lg' name='email' placeholder='name' 
                        value={email} onChange={e => setEmail(e.target.value)} error={!!errors.email}/>
                    </div>
                </div>
                <div className="contact__form-div">
                    <label className="contact__form-tag text-cs">Your subject <b>*</b></label>
                    <Textarea size='lg' className='text-area subject-area' name='subject' placeholder='subject' 
                    value={subject} onChange={e => setSubject(e.target.value)} error={!!errors.subject}/>
                </div>
                <div className="contact__form-div contact__form-area">
                    <label className="contact__form-tag text-cs">Your message <b>*</b></label>
                    <Textarea size='lg' className='text-area-message' name='message' placeholder='message'   
                    value={message} onChange={e => setMessage(e.target.value)} error={!!errors.message}/>
                </div>

                <div className="contact__submit">
                    <button type='button' className="btn text-cs" onClick={handleSubmit}>Send Message</button>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert severity={success ? 'success' : 'error'} sx={{width: '100%'}} onClose={handleClose}>
                        {success ? 'Your email has been sent!' : 'Error! Email could not be sent.'}
                        </Alert>
                    </Snackbar>
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