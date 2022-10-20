import React from 'react';
import icon from '../../../images/image 2.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='container'>
            <ul className='p-0'>
                <li className='d-md-inline'>© 2022 COMPANY, All Rights Reserved.</li>
                <li className='d-md-inline'>Cookie Notice</li>
                <li className='d-md-inline'>Privacy Notice</li>
                <li className='d-md-inline'>Terms & Conditions</li>
                <li className='d-md-inline'>Site Notice</li>
                <li className='d-md-inline'>Contact Us</li>
            </ul>
            <img src={icon} alt="" />
        </footer>
    );
};

export default Footer;