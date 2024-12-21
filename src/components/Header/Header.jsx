import {React,useContext} from "react";
import { TypeAnimation } from "react-type-animation";
import {AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'
import myImg from "../../assets/img/mypic.png";
import glassesemoji from "../../assets/img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import CTA from "./CTA";
import { themeContext } from "../../context";
import { motion } from "framer-motion";
import { socialMediaLinks } from "../../utils/common-utils";

import "./header.css";


const Header = () => {
  const transition = { duration: 0.5, typeof: "spring" };
  // const github ="https://github.com/shivtheuser"
  const github =socialMediaLinks;
  console.log("hell",socialMediaLinks[0].Instagram)
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className=" container header" id="Home">
      <motion.div initial={{left:"-20%"}} whileInView={{left:"0%"}} transition={transition}  className="header-left ">
        <div className="name">
          <span>
            Hi! I'm  <b style={{color:darkMode?"var(--color-primary-variant":""}}> Shivam Singh</b>
          </span>
          <span style={{fontWeight:900}}>I am a 
            {" "}
            <b style={{color:darkMode?"var(--color-primary-variant)":""}}>
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                500,
                "Frontent Developer",
                500,
                "Backend Developer",
                500,
                "Software Engineer",
              ]}
              repeat={Infinity}
            />
            </b>
            </span>
          <span>
            I’m a software developer and here is my portfolio website.
            <br /> Here you’ll learn about my journey as a Website Developer.
          </span>
        </div>
        <CTA />
        <div className="i-icons">
          <AiOutlineGithub style={{color:darkMode?"var(--color-white)":"var(--color-black"}} className="social-icon-hover" onClick={()=>window.open(socialMediaLinks[0].github)}/>
          <AiOutlineInstagram style={{color:"#DD2A7B"}} className="social-icon-hover" onClick={()=>window.open(socialMediaLinks[0].Instagram)} />
          <AiOutlineLinkedin style={{color:"#0077b5"}} className="social-icon-hover" onClick={()=>window.open(socialMediaLinks[0].Linkedin)} />
        </div>
      </motion.div>
      <div className="header-right">
        <img src={myImg} alt="" />
         <motion.img initial={{left:"-15%"}} whileInView={{left:'10%'}} transition={transition} src={glassesemoji} alt=""/>
        <motion.div initial={{right:"-20%",top:"-4%"}} whileInView={{right:"5%"}} transition={transition}   className="floating-div">
          <FloatingDiv img={"https://img.icons8.com/?size=96&id=108784&format=png"} title1="MERN Stack" title2={"Developer"} />
        </motion.div>
        <motion.div initial={{bottom:"10%",left:"-20%"}} whileInView={{left:"10%"}} transition={transition} className="floating-div">
          <FloatingDiv img={"https://img.icons8.com/?size=160&id=gEUAVzkSqR4R&format=png"} title1="Web " title2={"Developer"} />
        </motion.div>
        <motion.div initial={{top:"10%",left:"-20%"}} whileInView={{left:"10%"}} transition={transition}  className="floating-div">
          <FloatingDiv img={"https://img.icons8.com/?size=160&id=Vra58PN2KmI5&format=png"} title1="Frontend" title2={"Developer"} />
        </motion.div>
        <motion.div initial={{bottom:"10%",right:"-20%"}} whileInView={{right:"0%"}} transition={transition} style={{ bottom: "10%", right: "0%" }} className="floating-div">
          <FloatingDiv img={"https://img.icons8.com/?size=96&id=hsPbhkOH4FMe&format=png"} title1="Backend Stack" title2={"Developer"} />
        </motion.div>
        <div className="blur" style={{ background: "regb(238 210 255" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem ",
            left: "-9rem",
            width: "21rem",
            height: "11rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
