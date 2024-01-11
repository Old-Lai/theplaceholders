import React from 'react';
import '../styles/FloatingWords.css';

const words = ['Innovative', 'Creative', 'Team Players', 'Problem Solvers', 'Analytical'];

const FloatingWords = () => {
  return (
    <div className="floating-words-container">
      {words.map((word, index) => (
        <span key={index} className={`floating-word floating-word-${index}`}>
          {word}
        </span>
      ))}
    </div>
  );
};

export default FloatingWords;
