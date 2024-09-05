import React from 'react';
import './HomePage.css';

const myName = "Jordan";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <h1 className="hero-title">Hi, I'm {myName}.</h1>
        <p className="hero-subtitle">
          Data Scientist | Developer | AI Enthusiast
        </p>
        <div className="hero-links">
          <a href="#projects" className="hero-btn">
            View Projects
          </a>
          <a href="#contact" className="hero-btn outline-btn">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};
  
export default HomePage;