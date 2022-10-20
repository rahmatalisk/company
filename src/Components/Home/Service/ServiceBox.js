import React from 'react';
import arrow from '../../../images/Arrow 3.png'
import './ServiceBox.css'

const ServiceBox = () => {
    return (
        <div className='service-box'>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
            <img src={arrow} alt="" />
        </div>
    );
};

export default ServiceBox;