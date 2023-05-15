import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const[appointments,setAppointments]=useState([]);
const[user]=useAuthState(auth)


    useEffect(()=>{
        if(user)
        {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res=>res.json())
        .then(data=>setAppointments(data))
        }

    },[user])
    return (
        <div>
         
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr >
        <th className=' text-primary font-bold text-2xl'>ID</th>
        <th className=' text-primary font-bold text-2xl'>Name</th>
        <th className=' text-primary font-bold text-2xl'>Date</th>
        <th className=' text-primary font-bold text-2xl'>Slot</th>
        <th className=' text-primary font-bold text-2xl'>Treatment</th>
      </tr>
    </thead>
    <tbody>
  {
      appointments.map((a,index)=><tr>
        <th className='text-purple-500'>{index+1}</th>
        <td className='text-purple-500'>{a.patientName}</td>
        <td className='text-purple-500'>{a.date}</td>
        <td className='text-purple-500'>{a.slot}</td>
        <td className='text-purple-500'>{a.treatment}</td>
      </tr>)
  }
      
     
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;