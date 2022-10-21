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
                        <a href="/"><img className='navbar-logo' src={logo} alt="" /></a>
                        
                    </div>
                    <div className="navbar-link">
                        <ul>
                            <li><a href="#charts">Charts</a></li>
                            <li><a href="#academy">Academy</a></li>
                            <li><button className='sign-up-button'>Sign Up</button></li>

                            <li><a className='m-0' href="/profile"><button className='login-button'>Login</button></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;