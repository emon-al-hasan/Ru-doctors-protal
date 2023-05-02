import React from 'react';
import appointments from '../../assets/images/appointment.png'
const Contact = () => {
    return (
 <div className='mb-36  ' style={
    {
        background:`url(${appointments})`,
       backgroundSize:'cover',
       height:'570px',
       backgroundRepeat:'no-repeat'
       
       
        
    }
} >
   
    <div className='text-center pt-12 mb-12'>
        <h1 className='text-3xl text-teal-500'>Contact Us</h1>
        <h2 className='text-4xl text-stone-300'>Stay connected with us</h2>
    </div>
    <div className='flex justify-center items-center'>
    <form>
       <input className='pt-3 pr-52 text-2xl pl-2.5    pb-3 rounded-2xl outline-none' type="email" placeholder='Email Address' /><br />
       <input className='pt-3 pr-52 text-2xl pl-2.5  pb-3 rounded-2xl mt-3 outline-none' type="email" placeholder='Subject' /><br />
       <input className='pt-3 pr-52 text-2xl pl-2.5  pb-32 rounded-2xl mt-3 outline-none' type="email" placeholder='Your message' /><br />
 <div className='flex justify-center items-center mt-5'>
 <button className='bg-teal-400 text-white pt-2.5 pb-2.5 pl-7 pr-7 rounded-2xl font-bold' >Submit</button>
 </div>
   
   
   
     </form>
    </div>
    
 </div>
    );
};

export default Contact;