import React from 'react';
import './Account.css'

const Account = () => {
    return (
        <div className='account mx-auto'>
            <div className='account-detail '>
                <h6>Personal Details</h6>
                <form>
                    <div className='group'>
                        <label htmlFor="" className='col-3'>E-mail</label>
                        <label className='col-9 ' htmlFor="">mail@mail.com</label>
                    </div>
                    <div className='group'>
                        <label htmlFor="" className='col-3'>*First Name</label>
                        <input className='col-9 ps-md-2 py-2 ' type="text" value="Peter" />
                    </div>
                    <div className='group'>
                        <label htmlFor="" className='col-3'>*Last Name</label>
                        <input className='col-9 ps-md-2 py-2' type="text" value="Pe" />
                    </div>
                    <input className='form-btn' type="submit" value="Save" />
                </form>

            </div>
            <div className='reset-password'>
                <h6>Reset Password</h6>
                <button className='form-btn'>Reset Password</button>
            </div>
            <div className="delete d-md-flex text-center">
                <p>Delete account permanently</p>
                <button className="delete-btn">Delete Account</button>
            </div>
        </div>

    );
};

export default Account;