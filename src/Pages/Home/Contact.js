import React from 'react';
import appointments from '../../assets/images/appointment.png'
const Contact = () => {
    return (
 <div className='mb-36 w-36' style={
    {
        background:`url(${appointments})`,
        width:'1200px',
        height:'407px'
       
        
    }
} >
     <form className='text-center'>
       <input  type="email" placeholder='Email Address' /><br />
    <input  type="text" placeholder='Subject' /><br />
   
   
    <input  type="text" placeholder='Your message' />
     </form>
 </div>
    );
};

export default Contact;