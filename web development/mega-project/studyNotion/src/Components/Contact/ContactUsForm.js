import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Spinner } from '../core/Home/spinner';
import {apiConnector} from '../../services/apiconnector';
import {contactusEndpoint} from '../../services/apis';
import toast from 'react-hot-toast';
import countryCode from '../../additionalfiles/data/countrycode.json';

export const ContactUsForm = () => {

    const [loading,setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState:{errors,isSubmitSuccessful}
    } = useForm();

    async function submitHandler(data) {
        console.log(data)
        try{ 
            setLoading(true);
            console.log(data)
            const response = await apiConnector("POST",contactusEndpoint.CONTACT_US_API,data);
            console.log("printing response of contactus ",response);
            setLoading(false);
            toast.success('suceessfully send your message')
        }
        catch(error)
        {
            toast.error("error in sending mesaage");
            console.log(error.message);
            console.log("error in contactus")
            setLoading(false);
        }
    }

    useEffect(() => {
        if(isSubmitSuccessful)
        {
            reset({
                email:"",
                firstName:"",   
                lastName:"",
                message:"",
                phoneNo:""
            })
        }
    },[isSubmitSuccessful,reset]);



  return (
    <div className='text-richblack-900 w-[600px] mx-auto h-[600px] '>
        {
            loading
            ?
            <div className="mx-auto w-full flex justify-center items-center py-[200px]">
                <Spinner  />
            </div>
            :
            <form  onSubmit={handleSubmit(submitHandler)} >
                <div className='flex flex-col mx-auto w-11/12  justify-center gap-[30px]  '>

                    <div className='flex gap-[15px] justify-between w-full '>
                            {/* firstName */}
                            <div className='flex flex-col w-[50%]'>
                                <label htmlFor='firstName' className='text-richblack-50 text-[15px] py-[5px] '>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder='enter first name'
                                    id='firstName'
                                    {...register("firstName",{required:true})}
                                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                                />
                                {
                                    errors.firstName &&(
                                        <span>please enter first name</span>
                                    )
                                }
                            </div>

                            {/* lastName */}
                            <div className='flex flex-col w-[50%]'>
                                <label htmlFor='lastName'  className='text-richblack-50 text-[15px] py-[5px] '>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder='enter last name'
                                    id='lastName'
                                    {...register("lastName",{required:true})}
                                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                                />
                                {
                                    errors.lastName &&(
                                        <span>please enter last name</span>
                                    )
                                }
                            </div>
                    </div>

                        {/* email */}
                        <div className='flex flex-col'>
                            <label htmlFor='email'  className='text-richblack-50 text-[15px] py-[5px] '>email </label>
                            <input
                                type="email"
                                name="email"
                                placeholder='enter email'
                                id='email'
                                {...register("email",{required:true})}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                            />
                            {
                                errors.email &&(
                                    <span>please enter email</span>
                                )
                            }
                        </div>
                        
                        {/* phoneNo */}
                        <div className='w-full'>
                            <label htmlFor='phoneNo'  className='text-richblack-50 text-[15px] py-[5px] '>Enter Phone no.</label>
                            <div className='flex flex-row gap-4'>
                                {/* drop Down */}
                                <select
                                    name="dropDown"
                                    id="dropdown"
                                    {...register("countryCode",{required:true})}
                                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]  border-b-[1px] w-[75px]'
                                >
                                {
                                    countryCode.map((data,index) => {
                                        return (
                                            <option className='h-[150px] '>
                                                {data.code} - {data.country}
                                            </option>
                                        )
                                    })
                                }   
                                </select>
                                <div className='w-full'>
                                    <input
                                        type="text"
                                        name="phoneNo"
                                        id="phoneNo"
                                        placeholder='1234567890'
                                        {...register("phoneNo",
                                        {
                                            required:{value:true,message:"please enter phone no"},
                                            maxLength:{value:10,message:"invalid phone no"},
                                            minLength:{value:8,message:"Invalid Phone Number"}
                                         })}
                                         className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                                    />
                                </div>
                            </div>
                        </div>

                        {/* message */}
                        <div className='flex flex-col'>
                            <label htmlFor='message'  className='text-richblack-50 text-[15px] py-[5px] '>message </label>
                            <textarea
                                name="message"
                                cols={"30"}
                                rows={"7"}
                                placeholder='enter your message here '
                                id='message'
                                {...register("message",{required:true})}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] w-full  border-b-[1px]'
                            />
                            {
                                errors.email &&(
                                    <span>please enter message </span>
                                )
                            }
                        </div>

                    <button type="submit" className='rounded-md bg-yellow-100 text-center py-[10px] text-inter text-richblack-900'>
                        send message
                    </button>
                    
                </div>
             </form>
        }
    </div>
  )
}
