import React from 'react';
import './Events.css';
import { Card, Col, Row, Button } from 'antd';
const EventsSection = () => {
  return (
    <>
    <section className="events-section" id='events-section'>
      <div className="container">
        <div className='events-header d-flex align-items-center justify-content-center'>
            <div>
                <h4 className='subtitle'>Events</h4>
                <h2 className='title'>Join a free community testing event</h2>
            </div>
            <div>
                <p className='desc'>Join one of our free testing events. Register and stop by for fast, online or in-person testing.</p>
            </div>
        </div>
        <Row gutter={16}>
            <Col span={6} md={6}>
                <Card
                    hoverable
                    className='event-card'
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <div className="card-content">
                        <div className='d-flex align-items-center justify-content-between'>
                            <span className='card-date'>Oct 15, 2023</span>
                            <span className='card-time'>10:00 AM - 2:00 PM</span>
                        </div>
                        <h3 className='card-title'>Free DNA Kit Distribution</h3>
                        <p className='card-desc'>Sunrise Medical Clinic</p>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Button color="primary" variant="outlined">Join Event</Button>
                            <Button color="default" variant="filled">...</Button>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col span={6} md={6}>
                <Card
                    hoverable
                    className='event-card'
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <div className="card-content">
                        <div className='d-flex align-items-center justify-content-between'>
                            <span className='card-date'>Oct 15, 2023</span>
                            <span className='card-time'>10:00 AM - 2:00 PM</span>
                        </div>
                        <h3 className='card-title'>Free DNA Kit Distribution</h3>
                        <p className='card-desc'>Sunrise Medical Clinic</p>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Button color="primary" variant="outlined">Join Event</Button>
                            <Button color="default" variant="filled">...</Button>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col span={6} md={6}>
                <Card
                    hoverable
                    className='event-card'
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <div className="card-content">
                        <div className='d-flex align-items-center justify-content-between'>
                            <span className='card-date'>Oct 15, 2023</span>
                            <span className='card-time'>10:00 AM - 2:00 PM</span>
                        </div>
                        <h3 className='card-title'>Free DNA Kit Distribution</h3>
                        <p className='card-desc'>Sunrise Medical Clinic</p>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Button color="primary" variant="outlined">Join Event</Button>
                            <Button color="default" variant="filled">...</Button>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col span={6} md={6}>
                <Card
                    hoverable
                    className='event-card'
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <div className="card-content">
                        <div className='d-flex align-items-center justify-content-between'>
                            <span className='card-date'>Oct 15, 2023</span>
                            <span className='card-time'>10:00 AM - 2:00 PM</span>
                        </div>
                        <h3 className='card-title'>Free DNA Kit Distribution</h3>
                        <p className='card-desc'>Sunrise Medical Clinic</p>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Button color="primary" variant="outlined">Join Event</Button>
                            <Button color="default" variant="filled">...</Button>
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
        <div className="d-flex align-items-center justify-content-center">
            <Button color="primary" variant="solid">View More Event</Button>
        </div>
      </div>
    </section>
    </>
  );
};

export default EventsSection;
