import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();

const{data:services,isLoading}=useQuery('services',()=>fetch('http://localhost:5000/service').then(res=>res.json()))

const imageStoragekey='fe791fbda00f12bb6643891dc215e642'



    const onSubmit = async data => {

        const image=data.image[0];
        const formData = new FormData();
        formData.append("image", image);

        const url=`https://api.imgbb.com/1/upload?key=${imageStoragekey}`
      fetch(url,{
          method:'POST',
          body:formData
      })
      .then(res=>res.json())
      .then(result=>{
          if(result.success)
          {
              const img=result.data.url;
              const doctor= {
                  name:data.name,
                  email:data.email,
                  specialty:data.specialty,
                  img:img
              }
              fetch('http://localhost:5000/doctor',{
                  method :'POST',
                  headers:{
                      'content-type':'application/json',
                      authorization:`Bearer ${localStorage.getItem('accessToken')}`
                  },
                  body:JSON.stringify(doctor)
              })
              .then(res=>res.json())
              .then(inserted=>{
                if(inserted.insertedId)
                {
                    toast.success('Doctor added successfully')
                    reset()
                }
                else{
                    toast.error('Failed to add doctor')
                }
              })
          }
       
      })
       
    }
    if(isLoading)
    {
        return <Loading></Loading>
    }


    return (
        <div className='mx-auto w-full max-w-xs' >
            <h2 className='text-2xl text-center text-cyan-500 font-bold'>Add New Doctor</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

<div className="form-control w-full max-w-xs ">
    <label className="label">
        <span className="label-text">Name</span>

    </label>



    
    <input type="text" placeholder=" Enter Your Name" className="input input-bordered w-full max-w-xs"
        {...register("name", {
            required: {
                value: true,
                message: 'Name is Required'
            },
         

        })} />
    <label className="label">
        {errors.name?.type === 'required' &&
            <span className="label-text-alt text-red-500">{errors.name.message}</span>}

     
    </label>
</div>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Email</span>

    </label>
    <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs"
        {...register("email", {
            required: {
                value: true,
                message: 'Email is Required'
            },
            pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            message: 'Provide a valid Email'

        })} />
    <label className="label">
        {errors.email?.type === 'required' &&
            <span className="label-text-alt text-red-500">{errors.email.message}</span>}

        {errors.email?.type === 'pattern' &&
            <span className="label-text-alt text-red-500">{errors.email.message}</span>}
    </label>
</div>


<div className="form-control w-full max-w-xs mb-6">
    <label className="label">
        <span className="label-text">Specialty</span>

    </label>
    <select {...register('specialty')} class="select input-bordered w-full max-w-xs">
 {
     services.map(service=><option key={service._id} value={service.name}>{service.name}</option>)
 }
  
</select>
    
    
</div>

<div className="form-control w-full max-w-xs ">
    <label className="label">
        <span className="label-text">Photo</span>

    </label>



    
    <input type="file"  className="input input-bordered w-full max-w-xs"
        {...register("image", {
            required: {
                value: true,
                message: 'Image is Required'
            },
         

        })} />
    <label className="label">
        {errors.name?.type === 'required' &&
            <span className="label-text-alt text-red-500">{errors.name.message}</span>}

     
    </label>
</div>


<input className='btn w-full max-w-xs' type="submit" value="Add" />
</form>
        </div>
    );
};

export default AddDoctor;