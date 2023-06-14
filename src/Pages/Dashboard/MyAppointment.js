import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const MyAppointment = () => {
    const[appointments,setAppointments]=useState([]);
const[user]=useAuthState(auth)
const navigate=useNavigate()


    useEffect(()=>{
        if(user)
        {
            fetch(`http://localhost:5000/booking?patient=${user.email}`,
            {
              method:'GET',
              headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              }
            }
            
            )

        .then(res=>       
           
          {
           console.log('res',res)
           if(res.status===401 || res.status===403)
           {
            signOut(auth);
            localStorage.removeItem('accessToken')
            navigate('/');
           }
             return res.json()
          }
        )
        .then(data=>
          {
           
            setAppointments(data)
          });
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
        <th className=' text-primary font-bold text-2xl'>phone</th>
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
        <td className='text-purple-500'>{a.phone}</td>
      </tr>)
  }
      
     
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;