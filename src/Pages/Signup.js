import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword,  useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from './Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../hooks/useToken';

const Signup = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating,UpdateError] = useUpdateProfile(auth);  
let signUpError;

 const[token]=useToken(user || gUser)


const navigate=useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();
    if ( loading || gLoading ||updating) {
        return <Loading></Loading>
    }
    if (token) {
       
       navigate('/appointment')
    }
if(error || gError || UpdateError)
{
    signUpError=<p className='text-red=500'><small>{error?.message ||gError?.message||UpdateError?.message }</small></p>
}
    const onSubmit = async data => {

        console.log(data);
       await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName:data.name })
       
    }
    return (
        <div className='flex justify-center items-center h-screen mt-12 mb-12  '>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <i> <h2 className="text-center text-2xl font-bold text-primary">Sign Up</h2></i>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
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
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs"
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


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                },


                            })} />
                        <label className="label">
                            {errors.password?.type === 'required' &&
                                <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            {errors.password?.type === 'minLength' &&
                                <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>



               {signUpError}
                    <input className='btn w-full max-w-xs' type="submit" value="Sign Up" />
                </form>
             <p><small>Already have an account ? <Link className='text-primary' to="/login">Please Login</Link></small></p>
                <div className="divider">OR</div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    </div>
    );
};

export default Signup;