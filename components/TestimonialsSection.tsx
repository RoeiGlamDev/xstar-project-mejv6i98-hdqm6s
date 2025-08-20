import React from 'react';
import './TestimonialsSection.css'; // Assuming you have a CSS file for styling

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'An unforgettable experience! The house was stunning and the service was impeccable.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    feedback: 'A luxurious getaway! Every detail was perfect, from the decor to the amenities.',
    rating: 5,
  },
  {
    name: 'Emily Johnson',
    feedback: 'Absolutely loved our stay! The ambiance was both elegant and relaxing.',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Guests Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
            <div className="testimonial-rating">
              {'★'.repeat(testimonial.rating)}{' '}
              {'☆'.repeat(5 - testimonial.rating)} {/* Displaying star rating */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;