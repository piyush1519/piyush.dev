// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson, BsCodeSlash, BsAward } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { FaBriefcase } from 'react-icons/fa';

const Navbar = () => {
  const [navbarBlur, setNavbarBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBlur(window.scrollY >= 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showMenu = () => {
    const bar = document.getElementsByClassName('bar');
    const ham = document.getElementsByClassName('NavbarLinks');
    bar[0].classList.toggle('barOne');
    bar[1].classList.toggle('barTwo');
    bar[2].classList.toggle('barThree');
    ham[0].classList.toggle('showNavbar');
  };

  const hideMenu = () => {
    const bar = document.getElementsByClassName('bar');
    const ham = document.getElementsByClassName('NavbarLinks');
    bar[0].classList.remove('barOne');
    bar[1].classList.remove('barTwo');
    bar[2].classList.remove('barThree');
    ham[0].classList.remove('showNavbar');
  };

  return (
    <nav className={navbarBlur ? 'Navbar blur' : 'Navbar'}>
      <h1 title="Reload" onClick={() => window.location.reload(true)} className="Logo">PN</h1>

      <div className="Hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className="NavbarLinks">
        <li onClick={hideMenu}><Link to="/"><AiOutlineHome size={18} /> Home</Link></li>
        <li onClick={hideMenu}><Link to="/about"><BsPerson size={18} /> About</Link></li>
        <li onClick={hideMenu}><Link to="/project"><BsCodeSlash size={18} /> Projects</Link></li>
        <li onClick={hideMenu}><Link to="/certifications"><BsAward size={18} /> Certifications</Link></li>
        <li onClick={hideMenu}><Link to="/experience"><CgFileDocument size={18} /> Experience</Link></li>
        <li onClick={hideMenu}><Link to="/resume"><FaBriefcase size={18} /> Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
