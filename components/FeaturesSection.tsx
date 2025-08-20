import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const features = [
  {
    title: 'Luxury Accommodations',
    description: 'Experience the finest in luxury living with our handpicked properties.',
  },
  {
    title: 'Personalized Services',
    description: 'Enjoy tailored services to make your stay unforgettable.',
  },
  {
    title: 'Exclusive Locations',
    description: 'Stay in the most sought-after locations for an unparalleled experience.',
  },
  {
    title: 'Elegant Design',
    description: 'Immerse yourself in spaces designed with sophistication and style.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Features</h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;