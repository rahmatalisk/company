import React from 'react';
import './Service.css'
import ServiceBox from './ServiceBox';

const Service = () => {
    return (
        <div>
            <div className="container service">
                <h2 className='text-center'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do</h2>
                <div className='row gap-4 gap-md-0'>
                    <div className="col-12 col-md-6 col-lg-3">
                        <ServiceBox ></ServiceBox>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <ServiceBox ></ServiceBox>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <ServiceBox ></ServiceBox>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <ServiceBox ></ServiceBox>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;