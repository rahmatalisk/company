import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import './Pricing.css'
import { EffectCards } from "swiper";

const Pricing = () => {
    const [key, setKey] = useState('monthly');
    return (
        <div>
            <div className="container pricing">
                <h2 className='text-center'>Pricing</h2>
                <p className="text-center mx-auto">Annually you have 8% off which is 1 month for free 😍</p>

                <div>
                    <div className="package-btn-group mx-auto">
                        <button className={`${key === "monthly" ? "active-btn" : ""}`} onClick={() => setKey("monthly")}>Monthly</button>
                        <button className={`${key === "annually" ? "active-btn" : ""}`} onClick={() => setKey("annually")}>Annually</button>
                    </div>

                    <div className='d-none d-md-block'>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3 d-none"
                        >
                            <Tab eventKey="monthly" title="monthly">
                                <div className="package-content d-flex justify-content-center gap-5">
                                    <div className="package-box ">
                                        <h3>Basic</h3>
                                        <p>Free Basic account to explore our platform</p>
                                        <div className='d-flex justify-content-center'>$ <h4 className="package-type">FREE</h4><span>USD/ <br />mo</span></div>
                                        <button className='package-sign-up-button'>Sign Up</button>
                                        <li>Fear and Greed Index for Bitcoin and Ethereum</li>
                                    </div>
                                    <div className="package-box ">
                                        <h3>Pro</h3>
                                        <p>Take it to the next level and get an edge in crypto markets</p>
                                        <div className='d-flex justify-content-center'>$ <h4 className="package-type">3.65</h4><span>USD/ <br />mo</span></div>
                                        <button className='package-sign-up-button'>Sign Up</button>
                                        <li>Fear and Greed Index for 100+ cryptocurrencies </li>
                                        <li>All future paid features (e.g. Alerts)</li>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="annually" title="Annually">
                                <div className="package-content d-flex justify-content-center gap-5">
                                    <div className="package-box ">
                                        <h3>Basic</h3>
                                        <p>Free Basic account to explore our platform</p>
                                        <div className='d-flex justify-content-center'>$ <h4 className="package-type">FREE</h4><span>USD/ <br />mo</span></div>
                                        <button className='package-sign-up-button'>Sign Up</button>
                                        <li>Fear and Greed Index for Bitcoin and Ethereum</li>
                                    </div>
                                    <div className="package-box ">
                                        <h3>Pro</h3>
                                        <p>Take it to the next level and get an edge in crypto markets</p>
                                        <div className='d-flex justify-content-center'>$ <h4 className="package-type">3.65</h4><span>USD/ <br />mo</span></div>
                                        <button className='package-sign-up-button'>Sign Up</button>
                                        <li>Fear and Greed Index for 100+ cryptocurrencies </li>
                                        <li>All future paid features (e.g. Alerts)</li>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className='d-md-none'>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3 d-none"
                        >
                            <Tab eventKey="monthly" title="monthly">
                                <div className="">
                                    <Swiper centeredSlides={true}
                                        className="mySwiper package-content d-flex justify-content-center "
                                        effect={"cards"}
                                        grabCursor={true}
                                        modules={[EffectCards]}>
                                        <SwiperSlide><div className="package-box ">
                                            <h3>Basic</h3>
                                            <p>Free Basic account to explore our platform</p>
                                            <div className='d-flex justify-content-center'>$ <h4 className="package-type">FREE</h4><span>USD/ <br />mo</span></div>
                                            <button className='package-sign-up-button'>Sign Up</button>
                                            <li>Fear and Greed Index for Bitcoin and Ethereum</li>
                                        </div></SwiperSlide>
                                        <SwiperSlide>
                                            <div className="package-box ">
                                                <h3>Pro</h3>
                                                <p>Take it to the next level and get an edge in crypto markets</p>
                                                <div className='d-flex justify-content-center'>$ <h4 className="package-type">3.65</h4><span>USD/ <br />mo</span></div>
                                                <button className='package-sign-up-button'>Sign Up</button>
                                                <li>Fear and Greed Index for 100+ cryptocurrencies </li>
                                                <li>All future paid features (e.g. Alerts)</li>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>


                                </div>
                            </Tab>
                            <Tab eventKey="annually" title="Annually">
                                <div className="">
                                    <Swiper centeredSlides={true}
                                        className="mySwiper package-content d-flex justify-content-center "
                                        effect={"cards"}
                                        grabCursor={true}
                                        modules={[EffectCards]}>
                                        <SwiperSlide><div className="package-box ">
                                            <h3>Basic</h3>
                                            <p>Free Basic account to explore our platform</p>
                                            <div className='d-flex justify-content-center'>$ <h4 className="package-type">FREE</h4><span>USD/ <br />mo</span></div>
                                            <button className='package-sign-up-button'>Sign Up</button>
                                            <li>Fear and Greed Index for Bitcoin and Ethereum</li>
                                        </div></SwiperSlide>
                                        <SwiperSlide>
                                            <div className="package-box ">
                                                <h3>Pro</h3>
                                                <p>Take it to the next level and get an edge in crypto markets</p>
                                                <div className='d-flex justify-content-center'>$ <h4 className="package-type">3.65</h4><span>USD/ <br />mo</span></div>
                                                <button className='package-sign-up-button'>Sign Up</button>
                                                <li>Fear and Greed Index for 100+ cryptocurrencies </li>
                                                <li>All future paid features (e.g. Alerts)</li>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;