// AnticipationForStory.js
import React from 'react';
import styled from 'styled-components';

const AnticipationContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const AnticipationText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const AnticipationForStory = ({ onNext }) => {
  const handleNext = () => {
    onNext();
  };

  return (
    <AnticipationContainer>
      <h2>Anticipation for Our First Valentine's Day Together</h2>
      <AnticipationText>
        As we embark on the journey of our love story, each chapter reveals a tapestry of shared moments,
        laughter, and the growth of our bond. This Valentine's Day marks our first celebration together,
        making each page of our story even more special.
      </AnticipationText>
      <button onClick={handleNext}>Continue the Journey</button>
    </AnticipationContainer>
  );
};

export default AnticipationForStory;
