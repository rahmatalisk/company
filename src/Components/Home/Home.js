import React from 'react';
import Banner from './Banner/Banner';
import Pricing from './Pricing/Pricing';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
      <Service></Service>
      <Pricing></Pricing>
        </div>
    );
};

export default Home;