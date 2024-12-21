import{ React,useContext} from "react";
import {ImCool} from 'react-icons/im'
import "./navbar1.css";
import Toggle from "../Toggle/Toggle";
import { themeContext } from "../../context";

const Navbar1 = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
 
  return (
    <div className="container" id="Navbar" style={{color:darkMode?"var(--color-black)":""}}>
      <div className="nav-name" > <ImCool/>Shivam Singh</div>
      < Toggle />
    </div>
  );
};

export default Navbar1;
