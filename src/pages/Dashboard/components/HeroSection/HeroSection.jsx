import React from 'react';
import './HeroSection.css';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import heroImg from "../../../../../src/assets/images/image2.png"
const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background image */}
      <div className="hero-bg">
        {/* Optional overlay for better text contrast */}

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Test yourself<br />from everywhere</h1>
            <p className="hero-subtitle">
              Order a test kit online or visit a nearby location —<br />
              get tested easily and access your results securely.
            </p>
            <div className="hero-buttons">
              <Button type="primary">Get Started</Button>
              <Button icon={<PlayCircleOutlined />}>How it Work</Button>
            </div>
          </div>

          <div className="hero-image">
                <img src={heroImg} alt="Hero" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
