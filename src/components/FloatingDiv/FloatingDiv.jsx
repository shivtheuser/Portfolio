import React from 'react'
import './floatingdiv.css'
const FloatingDiv = ({img,title1,title2}) => {
  return (
    <div className="floatingDiv">
        <img src={img} alt="" />
        <span>{title1} <br /> {title2}</span>
    </div>
  )
}

export default FloatingDiv