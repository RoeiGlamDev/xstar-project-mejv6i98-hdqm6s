'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '30px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 0.9,
      viewFactor: 0.2,
    });

    sr.reveal('.scroll-reveal', {
      interval: 200, // delay between animations
    });
  }, []);

  return <div className="scroll-reveal">{children}</div>; // Wrap children for scroll reveal
};

export default ScrollRevealComponent;