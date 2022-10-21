import React from 'react';
import './Billing.css'

const Billing = () => {
    return (
        <div className='billing mx-auto'>
            <div className='d-md-flex text-center pb-2 pb-md-0 justify-content-between subscription align-items-center'>
                <h6>Subscription</h6>
                <button className="upgrade">Upgrade</button>
            </div>
            <div className='billing-content'>
                <div className='group'>
                    <label htmlFor="" className='col-6 col-md-3'>Plan</label>
                    <label className='col-6 col-md-9  ' htmlFor="">Basic</label>
                </div>
                <div className='group'>
                    <label htmlFor="" className='col-6 col-md-3'>Price</label>
                    <label className='col-6 col-md-9  ' htmlFor="">$00</label>
                </div>
                <div className='group'>
                    <label htmlFor="" className='col-6 col-md-3'>Billing Period</label>
                    <label className='col-6 col-md-9 ' htmlFor="">-</label>
                </div>
                <div className='group'>
                    <label htmlFor="" className='col-6 col-md-3'>Expiration</label>
                    <label className='col-6 col-md-9 ' htmlFor="">-</label>
                </div>
            </div>
        </div>
    );
};

export default Billing;