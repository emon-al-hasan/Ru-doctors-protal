import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,refetch}) => {
    const{email,role}=user
    const makeAdmin=()=>{
fetch(`http://localhost:5000/user/admin/${email}`,{
    method:'PUT',
    headers:{
        authorization:`Bearer ${localStorage.getItem('accessToken')}`
    }
})
.then(res=>{
    if(res.status===403)
    {
        toast.error('failed to Make an admin')
    }
    return res.json()})
.then(data=>{
   if(data.modifiedCount>0)
   {
    refetch()
    toast.success(`Successfully Made an admin`)
   }
})
    }
    return (
        <tr class="bg-base-200">

            <td>{email}</td>
            <td>{role !=='admin' &&   <button class="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;