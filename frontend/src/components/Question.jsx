// Question.jsx
import React, { useState } from 'react';
import './Question.css';

const Question = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    // Save the message in local storage
    const existingMessages = JSON.parse(localStorage.getItem('birthdayMessages')) || [];
    existingMessages.push(message);
    localStorage.setItem('birthdayMessages', JSON.stringify(existingMessages));

    // Clear the input field
    setMessage('');
  };

  return (
    <div className="question-container">
      <h2 className="question-title">Write a beautiful birthday message for Sara:</h2>
      <textarea
        className="message-input"
        value={message}
        onChange={handleMessageChange}
        placeholder="Type your message here..."
      ></textarea>
      <button className="send-button" onClick={handleSend}>Send</button>
    </div>
  );
};

export default Question;
