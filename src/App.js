import React, { useEffect } from 'react';
import StoryApp from './components/StoryApp';
import CardMusic from './components/thank-you/know-much.mp3';

function App() {
  useEffect(() => {
    // Start playing the audio once the app loads
    const audio = new Audio(CardMusic);
    audio.loop = true;
    audio.play();

    // Cleanup audio when the component is unmounted (app is closed)
    return () => audio.pause();
  }, []);

  return (
    <div className="app">
      <StoryApp />
    </div>
  );
}

export default App;
