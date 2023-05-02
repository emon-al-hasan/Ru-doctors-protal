import React, { useState } from 'react';
import Footer from '../Home/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date,setDate]=useState(new Date())
    return (
        <div className='mt-12'>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointments date={date}></AvailableAppointments>
            <div className='pl-32'>
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Appointment;