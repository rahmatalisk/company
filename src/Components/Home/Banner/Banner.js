import React from 'react';
import './Banner.css'
import banner from '../../../images/image 1.png'

const Banner = () => {
    return (
        <div className='container'>
            <div className=" banner">
                <h2>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do</h2>
                <div className='row '>
                    <div className="banner-left col-12 col-md-6 col-lg-5">

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <button>Get started</button>
                    </div>
                    <div className='banner-right col-12 col-md-6 col-lg-7'>
                    <img className='img-fluid ' src={banner} alt="" />
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;