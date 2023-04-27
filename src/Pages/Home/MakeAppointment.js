import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center my-28 mt-56'  style={
            {
                background:`url(${appointment})`
            }
        } >
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-110px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold '>Appointment</h3>
                <h2 className='text-3xl text-white py-4'>Make an appointment Today</h2>
                <p className='text-white'>Not really in all honesty because until you take control of your own health and go to your own doctor and have your own doctor tell you what's going to work for you.I was well aware of the fact that once you appeared in Doctor Who as something else, you were ruled out for the part of the Doctor: that was a kind of well known thing in the business. </p>
                <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mt-5 ">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;