import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';
import { getPasswordResetToken } from '../services/operations/authApis';
import { Spinner } from '../Components/core/Home/spinner';

export const ForgotPassword = () => {

    const {loading} = useSelector((state) => state.auth);
    const [email,setEmail] = useState("");
    const [emailSent,setEmailSent] = useState(false);

    const dispatch = useDispatch();

    const submitHandler= (event) => 
    {
        event.preventDefault();
        dispatch(getPasswordResetToken(email,setEmailSent));
    }

  return (
    <div className=' flex flex-col  items-center mx-auto my-auto'>
    {
        loading 
        ?
        (
           <Spinner/>
        )
        :
        (
            <div className='text-richblack-5 flex flex-col justify-between items-start w-[444px] h-[400px] py-[32px] px-[32px]'>
                <h1 className='font-inter text-[28px] leading-[38px] '> 
                    {
                        !emailSent ? "Reset Your Password" : "Check Your Email"
                    }
                </h1>

                <p className='font-inter  text-[15px] text-richblack-300 '>
                    {
                        !emailSent 
                        ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery" 
                        : `We have sent the reset email to your email ${email}`
                    }
                </p>
                
                <form className='flex flex-col justify-between gap-[30px]' onSubmit={submitHandler}>
                    {
                        !emailSent
                        &&
                        (
                            <label>
                                <p className='font-inter text-[14px] text-pink-200 leading-[22px] py-[10px]'>Email address</p>
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => {setEmail(e.target.value)}}
                                    placeholder='enter your email address'
                                    className='bg-richblack-700 h-[48px] w-[380px] rounded-xl px-[10px] border-b-[1px]'
                                />
                            </label>
                        )
                    }

                    <button className={`h-[38px]  bg-yellow-50 rounded-lg text-richblack-900 ${emailSent ? "w-[400px]" : "w-full"}`} >
                        {
                            !emailSent
                            ?
                                "Reset Password"
                            :
                                "Resend email"
                        }
                    </button>
                </form>

                <div className='pt-[30px]'>
                    <Link to="/login">
                        <p className='flex flex-row gap-2 items-center '>
                        <BsArrowLeft/>
                        Back to login</p>
                    </Link>
                </div>
            </div>
        )
    }
    </div>
  )
}
