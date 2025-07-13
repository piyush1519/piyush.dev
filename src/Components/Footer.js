import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import { FaArrowUp } from "react-icons/fa";


const Footer = () => {
  useEffect(() => {
    const scrollBtn = document.querySelector(".scrollToTop");
    const handleScroll = () => {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer style={footerStyle}>
        <h4 style={textStyle}>© 2025 Developed by <b>NEXGEN</b></h4>

        <div style={iconContainer}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              style={iconBox}
              onMouseEnter={e => Object.assign(e.currentTarget.style, iconHover)}
              onMouseLeave={e => Object.assign(e.currentTarget.style, iconBox)}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <button
  onClick={scrollToTop}
  style={buttonStyle}
  className="scrollToTop"
  onMouseEnter={e => {
    Object.assign(e.currentTarget.style, buttonHoverStyle);
    e.currentTarget.style.color = '#ffffff';
  }}
  onMouseLeave={e => {
    Object.assign(e.currentTarget.style, buttonStyle);
  }}
>
  <FaArrowUp size={18} />
</button>


      </footer>
    </>
  );
};

// Social Links
const socialLinks = [
  { href: "https://github.com/piyush1519", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/piyuishnimbalkar19/", icon: <FaLinkedin /> },
  { href: "mailto:piyushnimbalkar15@gmail.com", icon: <GrMail /> },
  { href: "https://leetcode.com/piyush1519/", icon: <SiLeetcode /> },
];

// ✅ Transparent, frosted-glass style
const footerStyle = {
  backgroundColor: 'transparent', // More transparent
  backdropFilter: 'blur(10px)',
  padding: '20px 10px',
  color: '#fff',
  textAlign: 'center',
  position: 'relative',
};

const textStyle = {
  marginBottom: '12px',
  fontSize: '0.95rem',
  color: '#bbbbbb',
};

const iconContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  flexWrap: 'wrap',
};

// 🔘 Glass style with more transparency
const iconBox = {
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.04)', // Very light frosted
  backdropFilter: 'blur(6px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#bbbbbb',
  fontSize: '1.2rem',
  transition: 'all 0.3s ease',
  boxShadow: '0 0 10px transparent',
};

const iconHover = {
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  color: '#fff',
  boxShadow: '0 0 12px #9067C6, 0 0 18px #9067C6',
  transform: 'scale(1.05)',
};


const buttonStyle = {
  position: 'fixed',
  bottom: '24px',
  right: '24px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(6px)',
  color: '#ffffff',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '50%',
  width: '44px',
  height: '44px',
  fontSize: '1.2rem',
  cursor: 'pointer',
  display: 'none',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
  transition: 'all 0.3s ease',
  zIndex: 999,
};
const buttonHoverStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.12)',
  boxShadow: '0 0 10px #9067C6, 0 0 18px #9067C6',
  transform: 'scale(1.05)',
  color: '#ffffff', // ✅ Ensures arrow icon stays visible
};



export default Footer;
