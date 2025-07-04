import React from 'react';
import footerlogo from '../../../../assets/images/lsuhs-logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="footer-header">
            <div className="footer-logo">
                            <img src={footerlogo} alt="footerlogo" />
                          </div>
          <h2 className="footer-title">LSUHS</h2>
          <p className="footer-subtitle">Louisiana State University Health Sciences</p>
        </div>
        <div className="footer-content">
          <p>&copy; 2023 LSUHS. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
