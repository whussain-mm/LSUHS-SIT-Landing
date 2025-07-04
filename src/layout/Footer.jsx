import React from 'react';
import footerlogo from '../assets/images/lsuhs-logo.png';
import mailIcon from '../assets/icons/mail-icon.svg';
import phoneIcon from '../assets/icons/phone-icon.svg';
import './Footer.css';
import { Row, Col } from 'antd';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="footer-header">
            <Row gutter={16} align="middle" justify="space-between">
                <Col span={8} md={8}>
                <div className="footer-logo">
                    <img src={footerlogo} alt="footerlogo" />
                </div>
                </Col>
                <Col span={16} md={16}>
                    <div className="d-flex media-flex justify-content-start align-items-center"         >
                        <h5>Contact</h5>
                        
                            <a href="#"  className='media-link'>
                                <span className='icon'><img src={phoneIcon} alt="Phone" /></span>
                                <span className='text'>225-123-4567</span>
                            </a>
                            <a href="#"  className='media-link'>
                                <span className='icon'><img src={mailIcon} alt="Mail" /></span>
                                <span className='text'>info@lsuhealth.com</span>
                            </a>
                    </div>
                </Col>
            </Row>
        </div>
        <div className="footer-content">
            <Row gutter={16} align="middle" justify="space-between">
                <Col span={8} md={8}>
                    <p>&copy; 2023 LSUHS. All rights reserved.</p>
                </Col>
                <Col span={16} md={16}>
                <div className="footer-links">
                    <ul className="d-flex justify-content-start align-items-center">
                        <li><a href="#">User Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                </Col>
            </Row>
          
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
