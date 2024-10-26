import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling links
import { useNavigate } from 'react-router-dom'; // Correctly import useNavigate from react-router-dom

import './Navbar.css';
import logo from '../../Images/logo.png';
import menu_icon from '../../Images/menu.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate here

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  const goToSelectCategory = () => {
    navigate('/category');
};


  const goToMainPage = () => {
    navigate('/mainpage'); // Navigate to the main page
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
       
        <li>
          <Link to='contact' smooth={true} offset={0} duration={500} className='btnx'>Contact us</Link>
        </li>
        <li>
          <button onClick={goToMainPage} className='btnx'>Main Page</button>
          <button className='btnx' onClick={goToSelectCategory}>Sign up →</button>

        </li>

      </ul>
      <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
