import React from 'react';
import { Dropdown } from 'react-bootstrap';
import menu from '../../../images/bars-solid.svg'
import logo from '../../../images/Vector.png'
import './MobileNav.css'

const MobileNav = () => {
    return (
        <div>
            <div className="container-fluid mobile-navbar fixed-top bg-white">
                <div className="navbar-logo"><a href="/"><img src={logo} alt="" /></a></div>
                <div>
                    <Dropdown align="end">
                        <Dropdown.Toggle className='bg-light border-0'>
                            <img className='menu-button' src={menu} alt="" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='p-0 border-0'>
                            <Dropdown.Item className='shadow-none border-0 bg-transparent p-0 m-0'>
                                <div className="navbar-link">
                                    <ul className=''>
                                        <li><a href="#charts">Charts</a></li>
                                        <li><a href="#academy">Academy</a></li>
                                        <li><button className='sign-up-button'>Sign Up</button></li>

                                        <li><a className='m-0' href="/profile"><button className='login-button'>Login</button></a></li>
                                    </ul>
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;