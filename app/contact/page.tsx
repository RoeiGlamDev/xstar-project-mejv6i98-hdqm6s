import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: '#ff69b4' }}>Contact Us</h1>
            <p>We would love to hear from you!</p>
            <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
                <label style={{ marginBottom: '10px' }}>
                    Name:
                    <input type="text" style={{ padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ff69b4' }} />
                </label>
                <label style={{ marginBottom: '10px' }}>
                    Email:
                    <input type="email" style={{ padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ff69b4' }} />
                </label>
                <label style={{ marginBottom: '10px' }}>
                    Message:
                    <textarea style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ff69b4' }} rows={4} />
                </label>
                <button type="submit" style={{ padding: '10px', backgroundColor: '#ff69b4', border: 'none', borderRadius: '5px', color: '#fff', cursor: 'pointer' }}>
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactPage;