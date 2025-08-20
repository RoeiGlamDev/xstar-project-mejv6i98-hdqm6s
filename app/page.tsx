import React from 'react';
import './styles.css'; // Import custom styles

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="logo">HouseIL</h1>
        <nav className="navigation">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#listings">Listings</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section className="hero">
          <h2>Experience Luxury Like Never Before</h2>
          <p>Discover exquisite homes that redefine elegance.</p>
          <button className="cta-button">Explore Listings</button>
        </section>
        <section className="features" id="about">
          <h3>Why Choose HouseIL?</h3>
          <div className="feature-item">High-End Properties</div>
          <div className="feature-item">Personalized Service</div>
          <div className="feature-item">Exclusive Offers</div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 HouseIL. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;