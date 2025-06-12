import React from 'react';
import amLogo from '../../assets/aman.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <img src={amLogo} alt="AM Logo" className="logo" />
      </div>
      <p>&copy; 2025 Aman Maurya — All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
