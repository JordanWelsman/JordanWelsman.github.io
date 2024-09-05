import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About Me</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;