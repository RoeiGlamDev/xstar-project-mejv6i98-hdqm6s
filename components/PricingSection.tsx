import React from 'react';
import './PricingSection.css'; // Assuming you have a CSS file for styling

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="pricing-title">Luxury Pricing Plans</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Basic</h3>
                        <p className="card-price">$199/night</p>
                        <ul className="card-features">
                            <li>1 Bedroom</li>
                            <li>1 Bathroom</li>
                            <li>Free Wi-Fi</li>
                        </ul>
                        <button className="card-button">Book Now</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Deluxe</h3>
                        <p className="card-price">$299/night</p>
                        <ul className="card-features">
                            <li>2 Bedrooms</li>
                            <li>2 Bathrooms</li>
                            <li>Free Wi-Fi</li>
                            <li>Pool Access</li>
                        </ul>
                        <button className="card-button">Book Now</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Luxury</h3>
                        <p className="card-price">$499/night</p>
                        <ul className="card-features">
                            <li>3 Bedrooms</li>
                            <li>3 Bathrooms</li>
                            <li>Free Wi-Fi</li>
                            <li>Private Pool</li>
                            <li>Spa Access</li>
                        </ul>
                        <button className="card-button">Book Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;