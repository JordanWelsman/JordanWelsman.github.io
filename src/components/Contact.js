import React from 'react';

// Import CSS
import './styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you’d like to get in touch, you can reach me through the following:</p>
      <div className="contact-info">
        <div className="contact-item">
          <h2>Email</h2>
          <p><a href="mailto:jordan.welsman@outlook.com">jordan.welsman@outlook.com</a></p>
        </div>
        <div className="contact-item">
          <h2>Phone</h2>
          <p><a href="tel:+44 7449 467738">+44 7449 467738</a></p>
        </div>
        <div className="contact-item">
          <h2>GitHub</h2>
          <p><a href="https://github.com/JordanWelsman" target="_blank" rel="noopener noreferrer">github.com/JordanWelsman</a></p>
        </div>
        <div className="contact-item">
          <h2>LinkedIn</h2>
          <p><a href="https://linkedin.com/in/JordanWelsman" target="_blank" rel="noopener noreferrer">linkedin.com/in/JordanWelsman</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;