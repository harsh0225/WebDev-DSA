import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../services/operations/authApis';
import { useNavigate } from 'react-router-dom';

export const VerifyEmail = () => {

  const {signupData} = useSelector((state) => state.auth);

  const [otp,setOtp] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();

    console.log("ptinting sign up data",signupData);

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType
    } = signupData;

    console.log(firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType)
  
    dispatch(signup(firstName,lastName,email,password,confirmPassword,otp,accountType,navigate));
    
  }

  return (
    <div className='mx-auto my-auto w-[450px] px-5 py-5 h-auto'>
      <div className='flex flex-col justify-between gap-[40px] w-full'>

        <h2 className='text-richblack-5 text-[30px] font-inter'>Verify email</h2>

        <p className='text-[18px] text-richblack-200 '>A verification code has been sent to you. Enter the code below</p>

        
        <form onSubmit={submitHandler}>
         <p className='text-richblack-5 pb-2'>Enter otp<span className='text-red-500 text-[20px]'>*</span></p>
            <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => 
              <input {...props} 
              required
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                width:"48px"
              }}
              className='bg-richblack-700 text-richblack-5  lg:w-[60px] rounded-md aspect-square text-center focus:border-0 focus:outline-[3px] focus:outline-yellow-200'
            />}
            containerStyle={{
              justifyContent: "space-between",
              gap: "0 6px",
            }}
          />
          <button className='w-full bg-yellow-25 text-richblue-900 h-[35px] rounded-md mt-[30px]'>Verify Email</button>
        </form>

      </div>
    </div>
  )
}
