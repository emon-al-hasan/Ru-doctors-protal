import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const{data :users,isLoading,refetch}=useQuery('users',()=>fetch('http://localhost:5000/user',{
        method:'GET',
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
           

            <div class="overflow-x-auto">
  <table class="table mt-12 ml-96">
    
    <thead>
      <tr className='text-center'>
        
        <th>Email</th>
        <th>User Role</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     
     {
         users.map(user=><UserRow key={user._id} user={user} refetch={refetch} ></UserRow>)
     }
 
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;