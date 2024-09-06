import React from 'react';
import { Link } from 'react-router-dom';

// Import CSS
import './styles/Home.css';

const myName = "Jordan";

const Home = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <h1 className="hero-title no-select default-cursor">Hi, I'm {myName}.</h1>
        <p className="hero-subtitle no-select default-cursor">
          Data Scientist | Developer | AI Enthusiast
        </p>
        <div className="hero-links">
          <Link to="/projects" className="hero-btn">
            View Projects
          </Link>
          <Link to="/contact" className="hero-btn outline-btn">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;