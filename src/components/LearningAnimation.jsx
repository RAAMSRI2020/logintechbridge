import React from 'react';
import Lottie from 'react-lottie';
import learning from '../assets/learning.json';

function LearningAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: learning,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const containerStyle = {
    width: '100%',
    height: 'auto',
    maxWidth: '600px',  // Limits the maximum size on larger screens
    margin: '0 auto',   // Centers the animation
  };

  // Media query styles for responsiveness (in JS)
  const smallScreenStyle = window.innerWidth < 768 ? {
    maxWidth: '100%',  // Full width for smaller screens
  } : {};

  const largeScreenStyle = window.innerWidth > 1200 ? {
    maxWidth: '800px',  // Larger size for bigger screens
  } : {};

  // Merge styles based on screen size
  const responsiveStyle = { ...containerStyle, ...smallScreenStyle, ...largeScreenStyle };

  return (
    <div style={responsiveStyle}>
      <Lottie
        options={defaultOptions}
        style={{ background: 'transparent', border: 'none' }}
      />
    </div>
  );
}

export default LearningAnimation;
