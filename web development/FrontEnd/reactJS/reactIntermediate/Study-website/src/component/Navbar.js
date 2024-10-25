import React from 'react'
import logo from "../assets/Logo.svg";
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function Navbar(props){

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    




  return (
    <div className='flex justify-between  w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/" className='flex items-center justify-center'>
            <img src={logo} alt="Noimage" width={160} height={32} loading="lazy" /> 
        </Link>

        <nav className='flex items-center'>
            <ul className={`flex gap-[30px] text-richblack-100 items-center`}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

      {  /* login - signup - logout - Dashboard */}
      <div className='flex items-center gap-x-4 '>

        {
            !isLoggedIn && 
            <Link to="/login">
                <button 
                className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-[1px] border-richblack-700'
                >Login</button>
            </Link>
        }

        { 
            !isLoggedIn && 
            <Link to="/signup">
                <button
                className='bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-[1px] border-richblack-700'
                >Sign up</button>
            </Link>
        }

        {
            isLoggedIn &&
            <Link to="/logout">
                <button onClick={() => {
                    setIsLoggedIn(false)
                    toast.success("logged out")
                }}
                className='bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-[1px] border-richblack-700'
                >Logout</button>
            </Link>
        }

        {
            isLoggedIn &&
            <Link to="/dashboard">
                <button
                className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-[1px] border-richblack-700'
                >Dashboard</button>
            </Link>
        }

      </div>
    </div>
  )
}
