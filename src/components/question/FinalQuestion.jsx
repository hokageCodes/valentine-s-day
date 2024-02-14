// FinalQuestion.js
import React, { useState, useEffect } from 'react';
import ConfettiModal from '../ConfettiModal';
import './final-question.css';
// import Carousel from '../carousel/Carousel';
import Val from '../../assets/val.jpg'

const FinalQuestion = ({ onRoute }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [userResponse, setUserResponse] = useState(null);

  useEffect(() => {
    if (userResponse === 'yes') {
      const routeTimeout = setTimeout(() => {
        setShowConfetti(false);
        setUserResponse(null);
        onRoute();
      }, 2000);

      return () => clearTimeout(routeTimeout);
    }
  }, [userResponse, onRoute]);

  const handleResponse = (response) => {
    setUserResponse(response);
    setShowConfetti(true);
  };

  const handleModalClose = () => {
    setShowConfetti(false);
    setUserResponse(null);
  };

  return (
    <div className="final-question-container">
      <img src={Val} alt="" />
      <p className="final-question-text">
        As we journey through our love story, my heart is filled with gratitude and love. On this
        special Valentine's Day, I have a question for you...
      </p>
      <h2 className="final-question-title">Oladayo, Will You Be My Val?</h2>
      <div className="ctas">
        <button className="response-button yes-button" onClick={() => handleResponse('yes')}>
          Yes
        </button>
        <button className="response-button no-button" onClick={() => handleResponse('no')}>
          No
        </button>
      </div>

      {showConfetti && <ConfettiModal onClose={handleModalClose} response={userResponse} />}
    </div>
  );
};

export default FinalQuestion;
