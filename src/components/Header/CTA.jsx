import {React,useContext} from 'react'
import { themeContext } from "../../context";

const CTA = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='ctn'>
        <a style={{color:darkMode?"var(--color-primary-variant)":"",border:darkMode?"2px solid var(--color-primary-variant)":""}} href={"https://drive.google.com/file/d/1yVtyBvv82ImMGML0Jamp2Se-IPbmck_G/view?usp=drivesdk"} download="ShivamSinghResume" className='btn' target='_blank' >Download CV</a>
        <a style={{background:darkMode?"var(--color-primary-variant)":"",border:darkMode?"2px solid var(--color-primary-variant)":""}} href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
