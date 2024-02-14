// StoryApp.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Introduction from './intro/Introduction';
import MiddlePart from './middle/Middle';
import FinalQuestion from './question/FinalQuestion';
import AnticipationForStory from './anticipation/AnticipationForStory';
import MasonryGallery from './gallery/Gallery';
import Card from './thank-you/Card';

const StoryApp = () => {

  
  const [finalQuestionResponse, setFinalQuestionResponse] = useState(null);

  const handleNext = () => {
    // Navigate to the middle part
    window.location.href = '/middle';
  };

  const handleRouteToMiddle = () => {
    // Navigate to the middle part after 2 seconds
    setTimeout(() => {
      window.location.href = '/anticipate';
    }, 2000);
  };

  const handleAskQuestion = (response) => {
    // Set the response from the final question
    setFinalQuestionResponse(response);

    // If the response is "Yes," trigger confetti and wait 2 seconds before routing to the middle part
    if (response === 'yes') {
      handleRouteToMiddle();
    }
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/middle"
            element={<MiddlePart onNext={handleNext} />}
          />
          <Route
            path="/"
            element={
              finalQuestionResponse === 'yes' ? (
                <FinalQuestion onRoute={handleRouteToMiddle} />
              ) : (
                <FinalQuestion onRoute={handleRouteToMiddle} />
              )
            }
          />
          <Route
            path="/final"
            element={<MasonryGallery onClick={handleAskQuestion} />}
          />
          <Route
            path="/anticipate"
            element={<AnticipationForStory onClick={handleAskQuestion} />}
          />
          <Route
            path="/thanks"
            element={<Card onClick={handleAskQuestion} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default StoryApp;
