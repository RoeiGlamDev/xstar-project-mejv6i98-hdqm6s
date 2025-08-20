import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: '#ff69b4' }}>About HouseIL</h1>
            <p>
                Welcome to HouseIL, your premier destination for luxury accommodations. 
                We specialize in providing high-end rental properties that redefine elegance and comfort.
            </p>
            <h2 style={{ color: '#ff69b4' }}>Our Vision</h2>
            <p>
                At HouseIL, we believe that every stay should be an unforgettable experience. 
                Our properties are curated to offer the finest amenities and exquisite design, 
                ensuring that our guests feel pampered and at home.
            </p>
            <h2 style={{ color: '#ff69b4' }}>Why Choose Us?</h2>
            <ul>
                <li>Exclusive access to luxury homes</li>
                <li>Personalized service tailored to your needs</li>
                <li>Unmatched quality and attention to detail</li>
            </ul>
            <p>
                Join us in experiencing the ultimate in luxury travel with HouseIL. 
                Your dream getaway awaits!
            </p>
        </div>
    );
};

export default AboutPage;