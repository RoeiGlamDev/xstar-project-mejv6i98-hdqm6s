import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming a CSS file for styles

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">HouseIL</Link> {/* Logo linking to home */}
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/listings">Listings</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="auth">
                <Link to="/login" className="login">Login</Link>
                <Link to="/signup" className="signup">Sign Up</Link>
            </div>
        </header>
    );
};

export default Header;