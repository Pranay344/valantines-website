import React from 'react';

export default function Valentine() {
  return (
    <div className="page valentine">
      <h1>YAYYYYYYY U CLICKED YES </h1>
      <p>
      <br></br>The plan:<br></br>A Special Evening for Us<br></br>

Hi Cutu,

This evening, I want to celebrate us.<br></br> Five years of love, laughter, and unforgettable moments. Through all the ups and downs, one thing has never changed <br></br>is my love for you.<br></br>

So, I invite you to a night made just for us. 💫<br></br>

📍 Date: 14th feb<br></br>
⏳ Time: 7PM-9PM (Get ready by then 😉)<br></br>
💃 Dress Code: Elegance & Beauty just the way you love 💄👗<br></br>
🍽 Plan: A beautiful dinner, deep conversations and a night of love<br></br>

Take your time getting ready.<br></br> Every second is worth it because I know the result will be breathtaking. I can’t wait to see you shine.<br></br> Tonight is about us and our love.<br></br>

P.S.: I made a special playlist just for tonight 🎶 play it while you get ready, and let every song remind you how much I love you.

<br></br>See you at 7:00 PM, beautiful. 💕<br></br>

Forever Yours,
Pranay
      </p>

      {/* Music playlist link */}
      <div className="music-playlist">
        <a
          href="https://open.spotify.com/playlist/0MFpAgAqis5gZoPnzLwyRK?si=wVO6MozRThugodOQuIzwYg&pi=h19TtrQTTJKLE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen to Our Valentine's Playlist
        </a>
      </div>

      {/* Heart animations */}
      <div className="hearts-container">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="heart">❤️</div>
        ))}
      </div>
    </div>
  );
}
