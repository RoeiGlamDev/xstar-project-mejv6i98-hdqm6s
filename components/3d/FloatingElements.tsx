import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: black; // Dark background for luxury feel
  overflow: hidden;
`;

const FloatingElement = styled.div<{ top: string; left: string }>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: 200px;
  height: 200px;
  background-color: pink; // Elegant pink accents
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  animation: float 6s ease-in-out infinite; // Floating animation

  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
  }
`;

const FloatingElements: React.FC = () => {
  return (
    <FloatingContainer>
      <FloatingElement top="20%" left="10%" />
      <FloatingElement top="50%" left="30%" />
      <FloatingElement top="70%" left="60%" />
      <FloatingElement top="40%" left="80%" />
    </FloatingContainer>
  );
};

export default FloatingElements;