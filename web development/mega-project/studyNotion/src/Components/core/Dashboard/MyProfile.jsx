import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { IconButton } from '../../Common/IconButton';

export const MyProfile = () => {

    const {user} = useSelector((state) => state.profile)
    const navigate = useNavigate();

    console.log(user)

  return (
    <div className='text-white  w-[100vw] h-[100vh]'>
        <h1 className='text-[30px]'>My Profile</h1>
        <div className='w-[792px] h-[366px] flex flex-col items-center  mt-[50px] gap-[20px] '>
            {/* section - 1 */}
            <div className='h-[126px] flex flex-row evenly justify-center  w-full bg-richblack-800 py-[30px] rounded-lg'>
                <div className='flex w-[70%] items-center gap-[20px]'>
                    <img src={user?.image} 
                    alt='userImage'
                    className='aspect-square w-[78px] rounded-full object-cover'
                    />
                    <div>
                        <p>{user?.firstName + " " + user.lastName}</p>
                        <p>{user?.email}</p>
                    </div>
                </div>
                <IconButton 
                text="Edit"
                onclick={() => navigate("/dashboard/settings")}
                />
            </div>

            {/* section - 2  */}

            <div className='h-[126px] flex flex-col evenly justify-evenly items-center gap-[10px]   w-full  bg-richblack-800 py-[30px] rounded-lg'>
                <div className='flex  items-center justify-between '>
                    <p className="w-[554px] text-richblack-400 text-[20px]">About</p>
                    <IconButton text="edit" onclick={() => navigate("/dashboard/settings")}/>
                </div>
                <p className="flex pl-[80px] w-full text-richblack-100">{user?.additionalDetails?.about ??  "write something about yourself"}</p>
            </div>

            {/* section - 3  */}

            <div className="flex flex-col gap-[50px]  bg-richblack-800 py-[30px] rounded-lg w-full mb-[100px]">
                <div className='flex  items-center justify-between w-[630px] mx-auto'>
                    <p className="w-[500px]  text-[20px]">personal detailes</p>
                    <IconButton
                    text="Edit"
                    onclick={() => {navigate("/dashboard/settings")}}
                    
                    />
                </div>
                <div className="mx-[50px]">
                <div className="w-full flex flex-col gap-[20px] justify-center border-[1px] border-richblack-600 bg-slate-900 px-[30px] py-[30px] rounded-lg mx-auto">
                    <div className="flex flex-row gap-[270px]">
                        <div className="w-[130px]">
                            <p className="text-richblack-300 font-inter text-[14px] leading-[22px] ">First Name</p>
                            <p className='text-[16px] font-inter text-richblack-25'> {user?.firstName}</p>
                        </div>
                        <div>
                            <p className="text-richblack-300 font-inter text-[14px] leading-[22px] ">Last Name</p>
                            <p className='text-[16px] font-inter text-richblack-25'> {user?.lastName}</p>
                        </div>
                    </div>

                    <div className="flex flex-row  gap-[270px]">
                        <div className="w-[130px]">
                            <p className="text-richblack-300 font-inter text-[14px] leading-[22px] ">Gender</p>
                            <p className='text-[16px] font-inter text-richblack-25'> {user?.additionalDetails?.gender}</p>
                        </div>

                        <div>
                            <p className="text-richblack-300 font-inter text-[14px] leading-[22px] ">DOB</p>
                            <p className='text-[16px] font-inter text-richblack-25'>{user?.additionalDetails?.dob}</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-richblack-300 font-inter text-[14px] leading-[22px] ">Phone No</p>
                        <p className='text-[16px] font-inter text-richblack-25'> {user?.additionalDetails?.contactNo}</p>
                    </div>
                    <div>
                        <p className="text-richblack-300 font-inter text-[14px] leading-[22px] ">Email</p>
                        <p className='text-[16px] font-inter text-richblack-25'> {user?.email}</p>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    </div> 
  )
}
