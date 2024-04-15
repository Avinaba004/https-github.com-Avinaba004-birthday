import React, { useState } from 'react';

const Next = () => {
  const [messages, setMessages] = useState([]);

  return (
    <div>
      <h2>Birthday Messages:</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <button onClick={() => window.history.back()}>Go Back</button> {/* Use window.history.back() to navigate */}
    </div>
  );
};

export default Next;
