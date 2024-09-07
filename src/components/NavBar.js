import React from 'react';
import { Link } from 'react-router-dom';

// Import CSS
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/publications">Publications</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
      <a href="/Jordan A. Welsman.pdf" target="_blank" rel="noopener noreferrer" className="cv-button">Download CV</a>
    </nav>
  );
}

export default Navbar;