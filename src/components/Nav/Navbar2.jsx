import React, { useState,useContext } from "react";
import { themeContext } from "../../context";
import {
  AiOutlineBook,
  AiOutlineHome,
  AiOutlineUser,
  AiFillMessage,
  AiFillProject,
} from "react-icons/ai";
import "./navbar2.css";
const Navbar2 = () => {
  const [activeNav, setActiveNav] = useState("#");
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <nav style={{background:darkMode?"var(--color-white)":"",fontWeight:"700"}}>
      <a
        href="#Home"
        onClick={() => setActiveNav("#Home")}
        className={activeNav === "#Home" ? "active" : ""}
        title="Home" style={{color:darkMode?"var(--color-black)":"",fontWeight:"700"}}
      >
        <AiOutlineHome /> <span>Home</span>{" "}
      </a>
      <a
        href="#Experience"
        title="Experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        style={{color:darkMode?"var(--color-black)":"",fontWeight:"700"}}
      >
        <AiOutlineBook /> <span>Experience</span>{" "}
      </a>
      <a
        href="#Projects"
        title="Projects"
        onClick={() => setActiveNav("#Projects")}
        className={activeNav === "#Projects" ? "active" : ""}
        style={{color:darkMode?"var(--color-black)":"",fontWeight:"700"}}
      >
        <AiFillProject /> <span>Project</span>{" "}
      </a>
      <a
        href="#About "
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        title="About"
        style={{color:darkMode?"var(--color-black)":"",fontWeight:"700"}}
      >
        <AiOutlineUser /> <span>About</span>{" "}
      </a>
      <a
        href="#Contact"
        title="contact"
        onClick={() => setActiveNav("#message")}
        className={activeNav === "#message" ? "active" : ""}
        style={{color:darkMode?"var(--color-black)":"",fontWeight:"700"}}
      >
        <AiFillMessage /> <span>Contact</span>{" "}
      </a>
    </nav>
  );
};

export default Navbar2;
