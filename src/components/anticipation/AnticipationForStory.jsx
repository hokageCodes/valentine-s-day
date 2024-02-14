// AnticipationForStory.js
import React from 'react';
import './anticipation.css';
import Happy from '../../assets/ICL.gif';

const AnticipationForStory = ({ onNext }) => {
  return (
    <div className="anticipation-container">
      <img className="anticipation-image" src={Happy} alt="" />
      <h2 className="anticipation-title">Anticipation for Our First Valentine's Day Together</h2>
      <p className="anticipation-text">
        As we embark on the journey of our love story, each chapter reveals a tapestry of shared moments,
        laughter, and the growth of our bond. This Valentine's Day marks our first celebration together,
        making each page of our story even more special.
      </p>
      <button className="anticipation-button" onClick={() => window.location.href = "/middle"}>Continue the Journey</button>
    </div>
  );
};

export default AnticipationForStory;
