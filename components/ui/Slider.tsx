'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const Slide = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? 'block' : 'none')};
  transition: opacity 0.5s ease;
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

const Navigation = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
`;

const Button = styled.button`
  background-color: black;
  color: pink;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    opacity: 0.8;
  }
`;

const Slider: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <SliderContainer>
      {images.map((image, index) => (
        <Slide key={index} active={index === currentIndex}>
          <img src={image} alt={`Slide ${index}`} style={{ width: '100%', borderRadius: '10px' }} />
        </Slide>
      ))}
      <Navigation>
        <Button onClick={prevSlide}>Prev</Button>
        <Button onClick={nextSlide}>Next</Button>
      </Navigation>
    </SliderContainer>
  );
};

export default Slider;