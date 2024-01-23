import React from 'react';
import '../styles/FloatingWords.css';

const words = ['Innovative', 'Creative', 'Team Players', 'Problem Solvers', 'Analytical'];

import { v4 as uuidv4 } from 'uuid';

const FloatingWords = () => {
  return (
    <div className="floating-words-container">
      {words.map((word) => (
        <span key={uuidv4()} className="floating-word">
          {word}
        </span>
      ))}
    </div>
  );
};

export default FloatingWords;
