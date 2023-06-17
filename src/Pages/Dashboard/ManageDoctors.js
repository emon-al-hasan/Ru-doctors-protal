import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const{data:doctors,isLoading,refetch}=useQuery('doctors',()=> fetch('http://localhost:5000/doctor',{
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading)
    {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'></h2>
            <div class="overflow-x-auto">
  <table className="table mt-12 ml-80 mb-12">
    
    <thead>
      <tr className='text-center'>
        <th className=' text-primary font-bold '>ID</th>
        <th className=' text-primary font-bold '>Avatar</th>
        <th className=' text-primary font-bold '>Name</th>
        <th className=' text-primary font-bold '>Specialty</th>
        <th className=' text-primary font-bold '>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        doctors.map((doctor,index)=><DoctorRow key={doctor._id} index={index} doctor={doctor} refetch={refetch}></DoctorRow>)
    }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageDoctors;