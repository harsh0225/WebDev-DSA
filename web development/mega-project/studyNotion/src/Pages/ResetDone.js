import React from 'react'
import { CTAButton } from '../Components/core/Home/CTAButton'
import { Link } from 'react-router-dom'
 
export const ResetDone = () => {
  return (
    <div className='mx-auto my-auto w-[500px] px-[32px] py-[32px] h-auto'>
        <div className='flex flex-col justify-between gap-[50px]'>
            <h2 className='text-richblack-5 text-[30px] font-inter leading-[38px]'>Reset Completed!</h2>
            <p className='text-[18px] text-richblack-200'>All done! We have sent an email to m***********@gmail.com to confirm</p>
            <Link to="/login">
                <button active={true}  className='text-richblack-900 h-[40px] bg-yellow-50 w-full rounded-md'>Return to login</button>
            </Link>
        </div>
    </div>
  )
}
