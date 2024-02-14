// MiddlePart.js
import React, { useState } from 'react';
import Carousel from '../carousel/Carousel';
import './middle.css';

const MiddlePart = ({ onNext }) => {
  const relationshipAspects = ['Beginning', 'Adventures', 'Milestones', 'Laughter', 'Expressions'];
  const aspectTexts = [
    'From the moment we met, our journey began. We found love in a very strange place but it is yet the best thing to happen to me since then. It is just like you walked right out one of my dreams 😍.',
    'Since I met you, I\'ve been so open to going out more often and making sweet memories as we live our lives. Thank you for being my waka about and tourist partner ❤️.',
    'Time passes so fast when I am with you. It feels like a decade already and I still cannot get enough of you. You and I know how far and how well we have come. I pray God bears us the strength and the means to continue to wax stronger and stronger.',
    'And Akara! And Akara!! 😂😂...I love how we play like kids when we are together. I love making you smile. Your smile is the prettiest I have seen. Thinking about your smile alone gives me the chills. 🥶',
    '"With you, my dreams have found a purpose, and my aspirations have taken flight. Your belief in me fuels my determination, and your love is the driving force behind my every endeavor. Thank you for being my inspiration."',
  ];

  const [currentAspect, setCurrentAspect] = useState(relationshipAspects[0]);

  const handleAspectChange = (aspect) => {
    setCurrentAspect(aspect);
  };

  return (
    <div className="middle-container">
      <Carousel images={['../../assets/val.jpg', 'sectionA_image2.jpg', 'sectionA_image3.jpg']} />
      <p className="middle-text">{relationshipAspects[currentAspect]}</p>
      <div className="aspect-indicator">
        {relationshipAspects.map((aspect, index) => (
          <span
            key={index}
            className={`indicator-dot ${currentAspect === index ? 'active' : ''}`}
            onClick={() => handleAspectChange(index)}
          ></span>
        ))}
      </div>
      <p className="aspect-description">{aspectTexts[currentAspect]}</p>
      <button className="next-button" onClick={() => window.location.href = '/final'}>
        Next
      </button>
    </div>
  );
};

export default MiddlePart;
