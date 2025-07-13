import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>&copy; 2025 Developed by Piyush Nimbalkar</h4>
     
      <div className='footerLinks'>
        <a href="https://github.com/piyush1519" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/piyuishnimbalkar19/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:piyushnimbalkar15@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer