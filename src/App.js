import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from './components/HomePage';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<HomePage />} />
        {/* Route for the Projects page */}
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;