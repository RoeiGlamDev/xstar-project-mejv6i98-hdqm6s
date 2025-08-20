import React from 'react';
import './Footer.css'; // Importing CSS for styling

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2 className="footer-title">HouseIL</h2>
                <p className="footer-description">Your luxury home away from home</p>
                <div className="footer-links">
                    <a href="/about" className="footer-link">About Us</a>
                    <a href="/contact" className="footer-link">Contact</a>
                    <a href="/terms" className="footer-link">Terms of Service</a>
                    <a href="/privacy" className="footer-link">Privacy Policy</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-copy">© 2023 HouseIL. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;