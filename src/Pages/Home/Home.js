import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Serve from './Serve';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <Serve></Serve>
        </div>
    );
};

export default Home;