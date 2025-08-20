'use client';

import React, { useEffect, useRef } from 'react';
import './ParallaxSection.css'; // Assuming you have a CSS file for styles

const ParallaxSection: React.FC = () => {
    const parallaxRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (parallaxRef.current) {
            const offset = window.pageYOffset;
            parallaxRef.current.style.backgroundPositionY = `${offset * 0.5}px`; // Adjust parallax effect
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax-section" ref={parallaxRef}>
            <div className="content">
                <h1 className="title">Welcome to HouseIL</h1>
                <p className="description">Experience luxury like never before.</p>
            </div>
        </div>
    );
};

export default ParallaxSection;