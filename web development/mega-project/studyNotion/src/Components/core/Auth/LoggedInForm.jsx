import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import {login} from '../../../services/operations/authApis';
import { useDispatch } from 'react-redux';

export default function LoggedInForm(props) {

    //let setIsLoggedIn = props.setIsLoggedIn;

    let navigate = useNavigate();
    const dispatch = useDispatch();


    const [formData,setFormData] = useState({Email:"" , Password:""});
    const [showPass,setShowPass] = useState(false)

    function changeHandler(event)
    {
        setFormData((prev) => {
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        }
        )
    }    


    function submitHandler(event)
    {
        const {Email,Password} = formData;
        event.preventDefault();
        dispatch(login(Email, Password, navigate));
    }

    return (
    <div className=''>
        <form onSubmit={submitHandler} 
        className='flex flex-col w-full gap-y-4 mt-6'>
            <label htmlFor='Email' className='w-full '>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<span className='text-pink-200 text-[20px] '>*</span></p>
                <input 
                    required
                    type="email"
                    placeholder='Enter email address'
                    name="Email"
                    id="Email"
                    value={formData.Email}
                    onChange={changeHandler}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                />
            </label>

            <label htmlFor='Password' className='relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<span className='text-pink-200 text-[20px] '>*</span></p>
                <input 
                    required
                    type= {showPass ? ("text") : ("password")}
                    placeholder='Password'
                    name="Password"
                    id="Password"
                    value={formData.Password}
                    onChange={changeHandler}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-[1px] w-full'
                />

                <span onClick={() => {
                    setShowPass(!showPass)
                }}
                className='absolute right-3 top-[40px] cursor-pointer' 
                >
                    {showPass ?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye  fontSize={24} fill="#AFB2BF"/>)}
                </span>

                <Link to="/forgotpassword">
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                        Forgot Password
                    </p>
                </Link>
            </label>
            
           <button className=' bg-yellow-50 rounded-[8px] font-medium text-black p-x-[8px] p-y-[12px] h-[30px] mt-6'> 
                Log In
           </button> 


        </form>
    </div>
  )
}