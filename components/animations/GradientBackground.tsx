import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'; // Importing LinearGradient for gradient background

const GradientBackground: React.FC = ({ children }) => {
    return (
        <LinearGradient
            colors={['#000000', '#FF69B4']} // Black to Pink gradient
            style={{ flex: 1 }} // Full screen gradient
        >
            {children} // Render children components
        </LinearGradient>
    );
};

export default GradientBackground;