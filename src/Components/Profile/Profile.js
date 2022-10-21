import React, { useState } from 'react';
import Account from './Account';
import Billing from './Billing';
import './Profile.css'
import profile from '../../images/profile.png'
import card from '../../images/image 4.png'
import { Tab, Tabs } from 'react-bootstrap';

const Profile = () => {
    const [key, setKey] = useState('account');
    return (
        <div className='container'>
            <div className='profile'>
                <div className="profile-btn-group d-flex">
                    <button onClick={()=>setKey("account")} className={`${key === "account"? 'active':""}`} style={{ marginRight: '33px' }}><img src={profile}  alt="" /> Account</button>
                    <button  onClick={()=>setKey("billing")} className={`${key === "billing"? 'active':""}`}><img style={{ width: "34px" }} src={card} alt="" /> Billing</button>
                </div>
                <div>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3 d-none"
                    >
                        <Tab eventKey="account" title="Account">
                        <Account></Account>
                            
                        </Tab>
                        <Tab eventKey="billing" title="Billing">
                        <Billing></Billing>
                        </Tab>
                    </Tabs>
                </div>


            </div>
        </div>
    );
};

export default Profile;