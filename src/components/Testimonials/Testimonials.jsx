import {React,useContext} from "react";
import {color, motion} from "framer-motion"
import "./testimonial.css";
import { testimonial_data } from "../../utils/common-utils";
import { themeContext } from "../../context";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <motion.section initial={{translateY:"40%"}} whileInView={{translateY:"0%"}} transition={{duration:0.5}}  id="testimonials">
      <h1 style={{textAlign:"center",color:darkMode?"var(--color-primary-variant)":""}}>Testimonials</h1>
      <Swiper   className="container testimonials_container mySwiper" navigation={true} modules={[Navigation]} >
        {testimonial_data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial" style={{background:darkMode?"var(--color-primary-variant)":""}}>
            <div className="client_avatar" >
              <img src={avatar} alt="client avatar1" />
            </div>
            <h5 style={{color:"white"}}>{name}</h5>
            <small className="client_review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default Testimonials;
