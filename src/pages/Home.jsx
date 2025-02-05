import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  // Initially, noButtonStyle is an empty object so that the No button is static (in flow)
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const handleYes = () => {
    navigate('/valentine');
  };

  // When the mouse enters the No button, update its style to absolute and randomize its position.
  const moveNoButton = () => {
    const newStyle = {
      position: 'absolute',
      // Use random percentages within 0% to 90% to keep the button mostly on-screen.
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
    };
    setNoButtonStyle(newStyle);
  };

  return (
    <div className="page home">
      <h1>Will you be my valentine?</h1>
      {/* The button-group uses flex to keep the buttons together initially */}
      <div className="button-group">
        <button onClick={handleYes}>Yes</button>
        <button onMouseEnter={moveNoButton} style={noButtonStyle}>No</button>
      </div>
      <div className="hearts-container">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="heart">❤️</div>
        ))}
      </div>
    </div>
  );
}
