import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Import pages
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  const location = useLocation(); // Get current location
  console.log(location);

  return (
    <div>
      {/* Conditionally render Navbar based on the current route */}
      {location.pathname !== '/' && <Navbar />}

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;