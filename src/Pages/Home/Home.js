import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Serve from './Serve';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <Serve></Serve>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
           <Contact></Contact>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;