import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Assuming you have a CSS file for styling

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <Link to="/">HouseIL</Link> {/* Logo linking to home */}
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/about">About</Link> {/* Link to About page */}
        </li>
        <li>
          <Link to="/listings">Listings</Link> {/* Link to Listings page */}
        </li>
        <li>
          <Link to="/contact">Contact</Link> {/* Link to Contact page */}
        </li>
        <li>
          <Link to="/login">Login</Link> {/* Link to Login page */}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;