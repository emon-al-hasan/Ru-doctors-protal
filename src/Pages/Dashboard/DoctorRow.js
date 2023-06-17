import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor,index,refetch}) => {
    const {name,specialty,img,email}=doctor
    const handleDelete=email=>{
        fetch(`http://localhost:5000/doctor/${email}`,{
            method:'DELETE',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount)
            {
                toast.success(`Doctor ${name} is deleted`)
                refetch()
            }
        })
    }
    return (
        
      <tr class="bg-base-200">
      <th>{index+1}</th>
      <td><div class="avatar">
  <div class="w-32 rounded">
    <img src={img} />
  </div>
</div></td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td><button onClick={()=> handleDelete(email)} class="btn btn-xs btn-error">Delete</button></td>
    </tr>
    );
};

export default DoctorRow;