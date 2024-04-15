// NextPage.jsx
import React, { useEffect, useState } from 'react';
import './Next.css';

const NextPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Retrieve messages from local storage
    const storedMessages = JSON.parse(localStorage.getItem('birthdayMessages')) || [];
    setMessages(storedMessages);
  }, []);

  const handleDeleteMessage = (index) => {
    // Remove the message at the specified index
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
    // Update local storage
    localStorage.setItem('birthdayMessages', JSON.stringify(updatedMessages));
  };

  return (
    <div className="next-page">
      <h6 className="title">
        <span role="img" aria-label="Balloon">🎉🎂</span> Happy Birthday, Sara! <span role="img" aria-label="Balloon">🎂🎉</span><br />
        <span className="birthday-text">
          On this special day, may your heart be filled with joy, your path with blessings, and your dreams with endless possibilities. May every moment of today be as bright and beautiful as you are, and may the year ahead be filled with love, laughter, and unforgettable memories.
          <br /><br />
          Here's to celebrating you – a wonderful soul who brings light and happiness into the lives of those around you. Wishing you a day that's as amazing as you are, and a year ahead that's even brighter and more extraordinary.
          <br /><br />
          Cheers to another fabulous trip around the sun! Though we don't spend time as before still i hope this will bring a smile on your face <span role="img" aria-label="Star">🌟✨</span>
        </span>
      </h6>
      <div className="photo-container">
        {/* Add 10 photo elements */}
        {[...Array(10)].map((_, index) => (
          <img key={index} src={`/image_${index + 1}.jpg`} alt={`Photo ${index + 1}`} className="photo" />
        ))}
      </div>
      {/* Add background music */}
      <audio autoPlay loop>
        <source src="https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/original-happy-birthday-song-1-48291.mp3" type="audio/mp3" />
      </audio>
      
      <h2 className="message-title">Messages from others:</h2>
      <ul className="message-list">
        {messages.map((msg, index) => (
          <li key={index} className="message">
            {msg}
            <button className="delete-button" onClick={() => handleDeleteMessage(index)}>Delete</button>
          </li>
        ))}
      </ul>
      
      <button className="back-button" onClick={() => window.history.back()}>Go Back</button>
      <p className="hope-message">Hope you like it 😊</p>
    </div>
    
  );
};

export default NextPage;
