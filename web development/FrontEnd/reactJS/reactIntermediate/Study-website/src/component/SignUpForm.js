import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


export default function SignUpForm(props){

    let setIsLoggedIn = props.setIsLoggedIn;
    let [accountType,setAccountType] = useState("student");
    let navigate = useNavigate();

    const [FormData,setFromData] = useState({firstName:"" , lastName:"" , Email:"" , Password : "" ,confirmPass:""})
    const [showPass1,setShowPass1] = useState(false);
    const [showPass2,setShowPass2] = useState(false);

    function changeHandler(event)
    {
        setFromData((prev)=> {
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }

    function submitHandler(event)
    {
        event.preventDefault();

        if(FormData.Password != FormData.confirmPass)
        {
            toast.error('password does not match');
        }
        else
        {
            setIsLoggedIn(true);
            toast.success("Account Created");
            navigate("/dashboard");
            
            const AccoutData = {
                ...FormData,
                accountType
            }

            console.log(AccoutData);
        }
    }

  return (
    <div className='flex flex-col gap-5'>
        <div className='flex bg-richblack-800  p-1 gap-x-1 my-6 rounded-full max-w-max '>
            <button 
                onClick={() =>{setAccountType("student")}}
                className={`${accountType === "student"  ? "bg-richblack-900 text-richblack-5 rounded-full py-2  px-5 transition-all duration-[0.5s]" :"bg-transperent text-richblack-200 py-2  px-5 rounded-full transition-all duration-[0.5s]" }`}>
                Student
            </button>
            <buttton 
                onClick={() =>{setAccountType("instructor") }}
                className={`${accountType === "instructor"  ? "bg-richblack-900 text-richblack-5  rounded-full py-2  px-5 transition-all duration-[0.5s]" :"bg-transperent text-richblack-200 py-2  px-5 rounded-full transition-all duration-[0.5s]" }`}>
                Instructor</buttton>
        </div>



        <form onSubmit={submitHandler} className='flex flex-col gap-4'>
            <div className='flex justify-between '>
                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>first name <span className='text-pink-200 text-[20px] '>*</span></p>
                    <input
                        required
                        type="text"
                        name="firstName"
                        placeholder='enter first name'
                        value={FormData.firstName}
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                    />
                </label>

                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>last name<span className='text-pink-200 text-[20px] '>*</span></p>
                    <input
                        required
                        type="text"
                        name="lastName"
                        placeholder='enter last name'
                        value={FormData.lastName}
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                    />
                </label>
            </div>

            <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email<span className='text-pink-200 text-[20px] '>*</span></p>
                <input
                    required
                    type="email"
                    name="Email"
                    placeholder='enter email'
                    value={FormData.Email}
                    onChange={changeHandler}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                />
            </label>

            <div  className='flex justify-between'>
                <label className='relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>create password<span className='text-pink-200 text-[20px] '>*</span></p>
                    <input
                        required
                        type = {showPass1 ? ("text") : ("password")}
                        name="Password"
                        placeholder='Password'
                        value={FormData.Password}
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
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
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>confirm password<span className='text-pink-200 text-[20px] '>*</span></p>
                    <input
                        required
                        type = {showPass2 ? ("text") : ("password")}
                        name="confirmPass"
                        placeholder='confirm Password'
                        value={FormData.confirmPass}
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                    />
                    <span onClick={() => {setShowPass2(!showPass2)}}
                    className='absolute top-10 right-3 cursor-pointer' 
                    >
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
            </div>

            <button className=' bg-yellow-50 rounded-[8px] font-medium text-black p-x-[8px] p-y-[12px] h-[30px] mt-6 w-full'>Create Account</button>
        </form>
    </div>
  )
}
