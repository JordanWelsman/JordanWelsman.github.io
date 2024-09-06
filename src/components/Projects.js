import React from 'react';

import './styles/Projects.css'; // Import CSS for styling

const projects = [
  {
    title: 'Spectare',
    description: 'A neural network visualization library.',
    image: 'https://picsum.photos/300/200', // Placeholder image
    link: 'https://github.com/JordanWelsman/spectare'
  },
  {
    title: 'Augmenting',
    description: 'An image augmentation pipeline library.',
    image: 'https://picsum.photos/300/200', // Placeholder image
    link: 'https://github.com/JordanWelsman/augmenting'
  },
  {
    title: 'Nexport',
    description: 'A neural network parameter exporting library.',
    image: 'https://picsum.photos/300/200', // Placeholder image
    link: 'https://github.com/JordanWelsman/nexport'
  },
  {
    title: 'Jutils',
    description: 'A programming utility library.',
    image: 'https://picsum.photos/300/200', // Placeholder image
    link: 'https://github.com/JordanWelsman/jutils'
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;