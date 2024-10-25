import React, { useState } from 'react'
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';
import { resetPassword } from '../services/operations/authApis';
import { useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { Spinner } from '../Components/core/Home/spinner';

export const UpdatePassword = () => {

  const [FormData,setFormData] = useState({password:"",confirmPassword:""});
  const [showPass1,setShowPass1] = useState(false);
  const [showPass2,setShowPass2] = useState(false);
  const location = useLocation()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading} = useSelector((state) => state.auth);

  const  changeHandler = (event) => {
    setFormData((prev) => { 
      return ({
        ...prev,
        [event.target.name] : event.target.value
      })
    })
  }

  function submitHandler(event) {
    event.preventDefault();
    const {password,confirmPassword} = FormData;
    if(password !== confirmPassword)
    {
      toast.error("password doesn't match")
    }
    else
    {
      const token =location.pathname.split("/").at(-1);
      console.log(token)
      dispatch(resetPassword(password,confirmPassword,token,navigate));
    }
  }

  return (
    <div className='text-richblack-5 mx-auto my-auto '>
      {
        loading
        ?
        (
          <Spinner/>
        )
        :
        (
          <div className='flex flex-col justify-between items-start h-[450px] px-[40px]'>

        <h2 className='text-[30px] text-richblack-5 leading-[38px] font-inter'>Choose New Password</h2>
        
        <p className='font-[18px] font-inter leading-[24px] text-richblack-200'>Almost done. Enter your new password and youre all set.</p>
        
        <form className='w-full flex flex-col gap-6' onSubmit={submitHandler}>
          
          <label className='relative'>
            <p className='text-[14px] leading-[24px] text-richblack-50 font-inter'>New Password <span className='text-red-500 text-[20px]'>*</span></p>
            <input
              required
              type = {showPass1 ? ("text") : ("password")}
              placeholder='Enter Password'
              name="password"
              onChange={changeHandler} 
              className='w-full h-[45px] bg-richblack-700 rounded-md pl-[20px]'
            />
            <span onClick={() => {setShowPass1(!showPass1)}}
                    className='absolute top-10 right-5 cursor-pointer' >
                            {
                                showPass1
                                ?
                                (
                                    <AiOutlineEyeInvisible   fontSize={20} fill="#AFB2BF"/>
                                )
                                :
                                (
                                    <AiOutlineEye  fontSize={20} fill="#AFB2BF" />
                                )
                            }
              </span>
          </label>

          <label className='relative'>
            <p className='text-[14px] leading-[24px] text-richblack-50 font-inter'>Confirm new Password <span className='text-red-500 text-[20px]'>*</span></p>
            <input
              required
              type = {showPass2 ? ("text") : ("password")}
              placeholder='Enter Password'
              name="confirmPassword"
              onChange={changeHandler}
              className='w-full h-[45px] bg-richblack-700 rounded-md pl-[20px]'
            />
            <span onClick={() => {setShowPass2(!showPass2)}}
                    className='absolute top-10 right-5 cursor-pointer' >
                            {
                                showPass2
                                ?
                                (
                                    <AiOutlineEyeInvisible   fontSize={20} fill="#AFB2BF"/>
                                )
                                :
                                (
                                    <AiOutlineEye  fontSize={20} fill="#AFB2BF" />
                                )
                            }
              </span>
          </label>

          <button className='w-full text-center bg-yellow-50 text-richblack-900 h-[40px] rounded-md mt-[20px]'>
            Reset Password
          </button>
        </form> 

        <Link to="/login" className=' flex flex-row items-center gap-3'>
            <BsArrowLeft/>
            <p className='text-richblack-5  flex flex-row'>back to login</p>
        </Link>
      </div>
        )
      }
    </div>
  )
}
