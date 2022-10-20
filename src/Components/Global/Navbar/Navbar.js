import React from 'react';
import logo from '../../../images/Vector.png'
import MobileNav from '../MobileNav/MobileNav';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='d-md-none'>
            <MobileNav></MobileNav>
            </div>
            <div className='navbar d-none d-md-block fixed-top bg-white'>
                <div className='container'>
                    <div className="navbar-logo">
                        <img className='navbar-logo' src={logo} alt="" />
                    </div>
                    <div className="navbar-link">
                        <ul>
                            <li><a href="#charts">Charts</a></li>
                            <li><a href="#academy">Academy</a></li>
                            <li><button className='sign-up-button'>Sign Up</button></li>

                            <li><button className='login-button'>Login</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;