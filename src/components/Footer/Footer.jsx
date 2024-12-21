import {React,useContext} from 'react'
import { themeContext } from "../../context";

import {FiInstagram,FiFacebook,FiTwitter} from 'react-icons/fi'
import './footer.css'
const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <footer className='' style={{background:darkMode?"var(--color-primary-variant)":""}}>
      <a href="#" className='footer_logo'>Shivam Singh</a>
      <ul className='permalinks'>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><FiTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Shivam Singh. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer