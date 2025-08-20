import React from 'react';
import './PricingPage.css'; // Importing CSS for styling

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page">
            <header className="header">
                <h1 className="title">Luxury Pricing</h1>
                <p className="subtitle">Experience the elegance of HouseIL</p>
            </header>
            <section className="pricing-options">
                <div className="pricing-option">
                    <h2 className="option-title">Standard Suite</h2>
                    <p className="option-price">$200/night</p>
                    <p className="option-description">Enjoy a comfortable stay with premium amenities.</p>
                </div>
                <div className="pricing-option">
                    <h2 className="option-title">Deluxe Suite</h2>
                    <p className="option-price">$350/night</p>
                    <p className="option-description">Indulge in luxury with exclusive features and services.</p>
                </div>
                <div className="pricing-option">
                    <h2 className="option-title">Presidential Suite</h2>
                    <p className="option-price">$500/night</p>
                    <p className="option-description">Experience the ultimate luxury with personalized services.</p>
                </div>
            </section>
            <footer className="footer">
                <p className="footer-text">Book your stay at HouseIL today!</p>
            </footer>
        </div>
    );
};

export default PricingPage;