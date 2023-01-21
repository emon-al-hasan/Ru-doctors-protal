import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 mb-12'>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardText="Sun-Thu...9 am -2 pm Sat-Fri...9 am -12 pm" cardTitle="Opening Hours" img={clock}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-accent to-primary" cardText="Mathihar,Rajshahi,Bangladesh" cardTitle="Our Locations" img={marker}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardText="01721-773453" cardTitle="Contact us now" img={phone}></InfoCard>
        </div>
    );
};

export default Info;