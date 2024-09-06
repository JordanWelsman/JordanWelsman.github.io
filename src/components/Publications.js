// src/Publications.js
import React from 'react';
import './styles/Publications.css'; // Import CSS for styling

const publications = [
  {
    title: 'Enhancing Electron Microscopy Image Classification Using Data Augmentation',
    authors: 'Jordan A. Welsman, Gunther H. Weber, Oluwamayowa O. Amusat, Anna Giannakou, Lavanya Ramakrishnan',
    journal: 'Conference Proceedings for the 5th Workshop on Artificial Intelligence and Machine Learning for Scientific Applications',
    year: 2024,
    link: 'https://ai4s.github.io/',
  }
  // Add more publications here
];

function Publications() {
  return (
    <div className="publications-container">
      <h1>Publications</h1>
      <div className="publications-list">
        {publications.map((publication, index) => (
          <div key={publication.title} className="publication-card">
            <h2>{publication.title}</h2>
            <p><strong>Authors:</strong> {publication.authors}</p>
            <p><strong>Journal:</strong> {publication.journal}</p>
            <p><strong>Year:</strong> {publication.year}</p>
            <a href={publication.link} target="_blank" rel="noopener noreferrer" className="publication-link">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publications;