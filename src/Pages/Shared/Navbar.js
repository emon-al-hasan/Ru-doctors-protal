import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = ({}) => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  

  const menutItems= <>
         <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/review">Review</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        {
         user &&  <li><Link to="/dashboard">Dashboard</Link></li>
        }
         <li>{user ?<button className="btn" onClick={logout}>Sign Out</button> :<Link to="/login">Login</Link>}</li>
  </>
    return (
        <div className="navbar  px-12 bg-gradient-to-r from-accent to-primary  shadow-lg  ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
     {menutItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-white font-bold"> Ru Doctors</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-2 pe-5 ps-5 ml-32 font-bold text-white">
   {menutItems}
    </ul>
  </div>
<div >
<label tabindex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

</div>
</div>
    );
};

export default Navbar;