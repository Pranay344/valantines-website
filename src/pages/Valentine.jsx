import React from 'react';

export default function Valentine() {
  return (
    <div className="page valentine">
      <h1>Our Special Meeting</h1>
      <p>
        Join me for an unforgettable afternoon at <strong>Bleachers</strong>.
      </p>
      <p>
        <strong>Time:</strong> 2:00 PM on February 14th
      </p>

      {/* Heart animations */}
      <div className="hearts-container">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="heart">❤️</div>
        ))}
      </div>
    </div>
  );
}
