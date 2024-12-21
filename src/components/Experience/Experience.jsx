import {React,useContext} from "react";
import {
  experienceDataFrontend,
  experienceDataBackend,
  experienceOtherData,
} from "../../utils/common-utils";
import "./experience.css";
import { themeContext } from "../../context";
import { useState } from "react";
import {motion} from "framer-motion";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 0.5, typeof: "spring" };

  const levelHandle = (data) => {
    if (data == 1) {
      return "Advance";
    } else if (data == 2) {
      return "Intermediate";
    } else if ((data = 3)) {
      return "Beginner";
    } else {
      return "Familiar";
    }
  };
  return (
    <div className="container" id="Experience" >
      <h1 style={{ textAlign: "center",color:darkMode?"var(--color-primary-variant)":"" }}>My Experience</h1>
      <div  className="experience-container " >
        <motion.div initial={{left:"-40%"}} whileInView={{left:"0%"}} className="experience-left " style={{background:darkMode?"black":"",color:darkMode?"var(--color-white)":"",border:darkMode?"2px solid var(--color-white)":""}}>
          <h3 style={{color:darkMode?"var(--color-primary-variant)":""}}>Frontend Development</h3>
          <div className="experience-content" >
            {experienceDataFrontend.map((data) => (
              <article className="experience-details">
                <img src={data.image} />
                <div>
                  <h4>{data.title}</h4>
                  <small className="text-light">
                    {levelHandle(data.level)}
                  </small>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{right:"-40%"}} whileInView={{right:"0%"}} className="experience-backend"  style={{background:darkMode?"black":"",color:darkMode?"var(--color-white)":"",border:darkMode?"2px solid var(--color-white)":""}} >
          <h3 style={{color:darkMode?"var(--color-primary-variant)":""}}>Backend Development</h3>
          <div className="experience-content" >
            {experienceDataBackend.map((data) => (
              <article className="experience-details">
                <motion.img initial={{bottom:"-20%"}} whileHover={{color:"red"}} transition={transition} src={data.image} />
                <div>
                  <h4>{data.title}</h4>
                  <small className="text-light">
                    {levelHandle(data.level)}
                  </small>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="other-section">
        <h2 style={{ textAlign: "center",color:darkMode?"var(--color-primary-variant)":"" }}>Tools and Others</h2>
        <div className="other-section-child">
          {experienceOtherData.map((data) => (
            <motion.div style={{color:darkMode?"var(--color-primary-variant)":"",border:darkMode?"2px solid var(--color-primary-variant)":""}} initial={{scale:"0.5"}} whileInView={{scale:"1"}} transition={transition} className="">
              <img
                src={data.image}
                alt=""
              />
              <span>{data.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
