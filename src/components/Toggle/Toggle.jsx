import React from 'react'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../context'
import { useContext } from 'react'
import  './toggle.css'
const Toggle = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  const handleClick=()=>{
    theme.dispatch({type:'toggle'})
  } 
  return (
    <div style={{border:darkMode?"2px solid var(--color-primary-variant)":""}} className="toggle"onClick={handleClick} >
      <Moon style={{color:"black"}}/>
      <Sun style={{color:"rgb(232 230 227)"}}/>
      <div className="t-button"  style={{left:darkMode?"2px":"",right:darkMode?"":"2px",background:darkMode?"var(--color-primary-variant)":""}} >
      </div>
    </div>
  )
}

export default Toggle