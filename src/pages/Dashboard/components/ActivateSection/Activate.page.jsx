import React from 'react';
import './Activate.css'
import { Button } from 'antd';
const ActivateSection = () => {
  return (
    <>
    <section className="activate-section" id='activate-section'>
        <div className="container">
            <div className='activate-header d-flex align-items-center justify-content-center'>
            <div>
                <h4 className='subtitle'>Activate</h4>
                <h2 className='title'>Already have a kit?</h2>
                <p className='desc'>Let’s activate your kit to start the testing process and access your results later.</p>
            <div className='activate-content d-flex align-items-center justify-content-center'>
                <Button color="primary" variant="outlined" >Activate Kit</Button>
            </div>
            </div>
            </div>
            
        </div>
        </section>
    </>
  );
};

export default ActivateSection;
