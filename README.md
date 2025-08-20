import React from 'react';

const README: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#ff69b4' }}>HouseIL</h1>
      <h2>Luxury Dark AirBNB Website</h2>
      <p>Welcome to HouseIL, your ultimate luxury accommodation experience.</p>
      
      <h3>Features</h3>
      <ul>
        <li>Elegant and high-end design</li>
        <li>Dark theme with pink accents</li>
        <li>User-friendly interface</li>
        <li>Responsive design for all devices</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>To get started with the HouseIL project, follow these steps:</p>
      <ol>
        <li>Clone the repository: <code>git clone <repository-url></code></li>
        <li>Navigate to the project directory: <code>cd HouseIL</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Start the development server: <code>npm start</code></li></li>
      </ol>
      
      <h3>Technologies Used</h3>
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>Styled Components</li>
        <li>React Router</li>
      </ul>
      
      <h3>Contributing</h3>
      <p>We welcome contributions! Please read our <a href="CONTRIBUTING.md" style={{ color: '#ff69b4' }}>Contributing Guide</a> for more information.</p>
      
      <h3>License</h3>
      <p>This project is licensed under the MIT License - see the <a href="LICENSE" style={{ color: '#ff69b4' }}>LICENSE</a> file for details.</p>
      
      <footer style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} HouseIL. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default README;