import React, { useEffect } from 'react';
import './Home.css';

const HomePage = () => {
  const handleButtonClick = (e) => {
    if (e.target.innerText === "ONLY FOR SARA (Password Required)") {
      const password = prompt("Please enter the password:");
      // Check if the password is correct
      if (password === "sara") {
        // Redirect to the next page
        window.location.href = "/next-page";
      } else {
        alert("Incorrect password!");
      }
    } else {
      // Redirect to another page without requiring a password
      window.location.href = "/question"; // Replace '/other-page' with the desired URL
    }
  };

  useEffect(() => {
    // Create and append multiple balloon elements
    const createBalloons = () => {
      const numBalloons = 10; // Number of balloons
      const container = document.querySelector('.balloon-container');
      for (let i = 0; i < numBalloons; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        balloon.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random animation duration
        container.appendChild(balloon);
      }
    };

    createBalloons(); // Call the function to create balloons

    // Remove balloons when animation ends to prevent memory leaks
    const removeBalloons = () => {
      const container = document.querySelector('.balloon-container');
      container.innerHTML = '';
      createBalloons();
    };

    // Restart animation when it ends
    document.querySelectorAll('.balloon').forEach(balloon => {
      balloon.addEventListener('animationend', removeBalloons);
    });

    return () => {
      // Cleanup event listeners
      document.querySelectorAll('.balloon').forEach(balloon => {
        balloon.removeEventListener('animationend', removeBalloons);
      });
    };
  }, []);

  return (
    <div className="container">
      <div className="background-animation"></div>
      <h1 className="title">IT'S BIRTHDAY TIMEEEE !!!!</h1>
      <div className="button-container">
        <button className="button" onClick={handleButtonClick}>ONLY FOR SARA (Password Required)</button>
        <button className="button" onClick={handleButtonClick}>WISH SARA ON HER BIRTHDAY</button>
      </div>
      {/* Balloon container */}
      <div className="balloon-container">
        <div className='balloon'></div>
      </div>
    </div>
  );
};

export default HomePage;
