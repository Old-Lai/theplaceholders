import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/FloatingWords.css";

const words = [
  "Innovative",
  "Creative",
  "Team Players",
  "Problem Solvers",
  "Analytical",
];

const FloatingWords = () => {
  useEffect(() => {
    const setRandomStyles = () => {
      const container = document.querySelector(".floating-words-container");
      const containerRect = container.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;

      const floatingWords = Array.from(
        document.getElementsByClassName("floating-word")
      );

      floatingWords.forEach((word) => {
        word.style.left = `${Math.random() * (containerWidth - word.clientWidth)}px`;
        word.style.top = `${Math.random() * (containerHeight - word.clientHeight)}px`;
        word.style.animationDuration = `${Math.random() * 3 + 8}s`;
        word.style.animationDelay = `-${Math.random() * 8 + 2}s`;
        word.style.fontSize = `${Math.random() * 2 + 1.5}rem`;
      });
    };

    setRandomStyles(); // Initial setup
  }, []);

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
