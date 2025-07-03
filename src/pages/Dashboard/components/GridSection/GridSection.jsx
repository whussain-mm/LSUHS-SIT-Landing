import React, { useState } from 'react';
import './GridSection.css';
import { Button, Col, Row } from 'antd';
import ImageGrid1 from '../../../../assets/images/image-grid-1.png';
import ImageGrid2 from '../../../../assets/images/image-grid-2.png';
import DynamicModal from '@/components/modals/DynamicModal';
import OrderTestForm from './OrderTestForm';

const GridSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="grid-section "  id='testing-location-section'>
      <div className="purple-box">
      <div className="container">
        <Row gutter={0} justify="center" align="middle">
          <Col span={24} md={12}>
            <div className='grid-purple-box'>
              <span className="label-yellow">Online</span>
              <h2 className="title">Test from Home</h2>
              <p className="desc"> Order a test kit online and collect your sample in the comfort of your home.</p>
              <Button type="default" onClick={() => setIsModalOpen(true)} >Order Online</Button>
              <DynamicModal
                visible={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                title="Order Test Kit Online"
              >
                <OrderTestForm />
              </DynamicModal>
            </div>
          </Col>
          <Col span={24} md={12}>
            <div className="grid-box">
              <img src={ImageGrid1} alt="Box 2" />
            </div>
          </Col>
        </Row>
      </div>
      </div>


      <div className="yellow-box">
        <div className="container">
          <Row gutter={0} justify="center" align="middle">
            <Col span={24} md={12}>
              <div className="grid-box">
                <img src={ImageGrid2} alt="Box 3" />
              </div>
            </Col>
            <Col span={24} md={12}>
            <div className="grid-yellow-box">
              <span className="label-purple">In Person</span>
              <h2 className="title">Visit nearby location</h2>
              <p className="desc">
                Prefer face-to-face service? Find testing events or clinic partners near you.
              </p>
              <Button type="primary">Find a Location</Button>
          </div>
            </Col>
          </Row>
          

          
          </div>
      </div>
    </section>
  );
};

export default GridSection;
