import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import {  useQuery } from 'react-query'
import Loading from '../Shared/Loading';

const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const[treatment,setTreatment]=useState(null)
    const formatedDate=format(date,'PP')

   const {data:services,isLoading,refetch}=useQuery(['available',formatedDate],()=>
   fetch(`http://localhost:5000/available?date=${formatedDate}`)
            .then(res => res.json())
            
   )
   if(isLoading)
   {
       return <Loading></Loading>
   }


    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formatedDate])
    return (
        <div>
            <h4 className='text-xl text-center text-secondary font-bold mb-12'> Available Appointments on : {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 pb-12 '>
                {
                   services?.map(service=><Service key={service._id} service={service}
                   setTreatment={setTreatment}
                   ></Service>)
                }
            </div>
            {
                treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}
                refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;