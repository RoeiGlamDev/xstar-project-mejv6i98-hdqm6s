import React from 'react';
import './AboutSection.css'; // Importing CSS for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">Welcome to HouseIL</h1>
                <p className="about-description">
                    Experience luxury living in our exquisite properties. 
                    HouseIL offers a curated selection of high-end accommodations 
                    designed for those who appreciate elegance and comfort.
                </p>
                <p className="about-description">
                    Our mission is to provide an unparalleled experience, 
                    combining sophistication with the warmth of home. 
                    Discover your perfect getaway with us.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;