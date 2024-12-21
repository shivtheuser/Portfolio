import {React,useContext} from 'react'
import { themeContext } from "../../context";

import {motion}  from "framer-motion"
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineFacebook} from 'react-icons/ai'
import emailjs from 'emailjs-com'

import { useRef } from 'react'


import "./contact.css"
const Contact = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs.sendForm('service_8e1zsmr', 'template_at9onar', form.current, 'wMLbyjADhqSucxFuX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
    <div className='container' id='Contact'>
      <h1 style={{textAlign:"center",color:darkMode?"var(--color-primary-variant)":""}}>Contact Me</h1>
      <div className="container contact_container">
        <motion.div initial={{translateX:"-30%"}} whileInView={{translateX:"0%"}} transition={{duration:0.5}}  className="contact_options"style={{background:darkMode?"var(--color-primary-variant)":""}}>
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h5>shivam.ssr4518@gmail.com</h5>
            <a href="mailto:shivam.ssr4518@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=9219060343&text=Hi, Shivam I Want to hire you, you are interested to join our team " target='_blank'>Send a message</a>
          </article>
        </motion.div>
        <form  ref={form} class="form" onSubmit={sendEmail} >
            <div class="formfield-container">
              <motion.input initial={{translateX:"30%"}} whileInView={{translateX:"0%"}} transition={{duration:0.5}}   class="formfield" type="text" name="name" id="Name" placeholder="Enter your name" />
              
              <motion.input initial={{translateX:"30%"}} whileInView={{translateX:"0%"}} transition={{duration:0.5}} class="formfield" type="email" name="email" id="email" placeholder="Enter your email address" />
              
              <motion.input initial={{translateX:"30%"}} whileInView={{translateX:"0%"}} transition={{duration:0.5}} class="formfield" type="text" name="subject" id="subject" placeholder="Enter your subject" />
              
              <motion.textarea initial={{translateX:"30%"}} whileInView={{translateX:"0%"}} transition={{duration:0.5}} name="message" id="message" cols="30" rows="10" class="formfield formfield-textarea"
              placeholder="Enter your message"></motion.textarea>
              
            </div>

            <div>
            <motion.button initial={{translateX:"60%"}} whileInView={{translateX:"0%"}} transition={{duration:0.5}} type="submit" class="btn btn-primary" id="submit"style={{background:darkMode?"var(--color-primary-variant)":"",border:darkMode?"2px solid var(--color-primary-variant)":""}}>
                Send Message<i class="submit-icon fa-solid fa-paper-plane"></i>
              </motion.button>
            </div>

          </form>
      </div>
    </div>
  )
}

export default Contact