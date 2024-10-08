import React from 'react';
import { Link } from 'react-router-dom';

// Import CSS
import './styles/Home.css';

const myName = "Jordan";
const role1 = "Data Scientist";
const role2 = "Developer";
const role3 = "AI Enthusiast";

const Home = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <h1 className="hero-title no-select default-cursor">Hi, I'm {myName}.</h1>
        <p className="hero-subtitle no-select default-cursor">
          {role1} | {role2} | {role3}
        </p>
        <div className="hero-links">
          <Link to="/projects" className="hero-btn">
            View Projects
          </Link>
          <Link to="/contact" className="hero-btn outline-btn">
            Contact Me
          </Link>
        </div>
        <div className="chat-links">
            <Link to="/chat" className="chat-btn outline-btn">
                Chat about Jordan
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;