import React from 'react';
import './StatsSection.css'; // Assuming you have a CSS file for styling

const StatsSection: React.FC = () => {
    return (
        <section className="stats-section">
            <div className="stat-item">
                <h2 className="stat-number">500+</h2>
                <p className="stat-description">Luxury Homes</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">300+</h2>
                <p className="stat-description">Happy Clients</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">100%</h2>
                <p className="stat-description">Satisfaction Rate</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">24/7</h2>
                <p className="stat-description">Customer Support</p>
            </div>
        </section>
    );
};

export default StatsSection;