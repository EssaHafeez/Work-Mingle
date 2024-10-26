import React from 'react';
import './Hero.css';
import dark_arrow from "../../Images/dark.png";
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>We Ensure a better education for a better world</h1>
        <p>Our cutting-edge curriculam is designed to empower students
        with the knowledge, skills, and experiences needed to excel in 
        the dynamic field of education</p>
      <button className='btnx'>Explore more<img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  );
};

export default Hero;