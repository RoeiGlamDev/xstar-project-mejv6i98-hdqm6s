import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: #000; // Black background for luxury feel
  color: #ff69b4; // Pink text color
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #ff69b4; // Change to pink on hover
    color: #000; // Change text color to black
    transform: scale(1.05); // Slightly enlarge on hover
  }

  &:focus {
    outline: none; // Remove default outline
  }
`;

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default Button;