import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1); // semi-transparent background
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px); // glass effect
  color: #fff; // text color
  width: 300px; // card width
  margin: 20px; // spacing between cards
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #ff69b4; // pink color for title
`;

const Description = styled.p`
  font-size: 1rem;
  color: #e0e0e0; // light grey for description
`;

const GlassCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default GlassCard;