import React from 'react';
import './HeroSection.css'; // Importing CSS for styling

const HeroSection: React.FC = () => {
    return (
        <div className="hero-section">
            <div className="overlay"></div>
            <div className="content">
                <h1 className="title">Welcome to HouseIL</h1>
                <p className="subtitle">Experience Luxury Living</p>
                <button className="cta-button">Explore Now</button>
            </div>
        </div>
    );
};

export default HeroSection;