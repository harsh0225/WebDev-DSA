import React from 'react'
import { ContactUsForm } from '../Components/Contact/ContactUsForm'
import { FooterForAll } from '../Components/Common/FooterForAll'
import {HiChatAlt2} from 'react-icons/hi'
import {BiWorld} from 'react-icons/bi';
import {FiPhoneCall} from 'react-icons/fi';


export const ContactUs = () => {
  return (
    <div>
        <div className='text-white flex flex-row items-start justify-center gap-[40px] w-11/12 mx-auto my-[100px]'>
            <div className='w-[450px] flex flex-col justify-start gap-[40px] bg-richblack-800  py-[40px] rounded-xl'>
                <div className='flex flex-row w-[402px] gap-[20px] items-start mx-auto'>
                    <div>
                        <HiChatAlt2 fontSize={25}/>
                    </div>
                    <div>
                        <h2 className='font-inter text-[18px] leading-[26px] text-richblack-5 '>Chat on us</h2>
                        <div className='font-inter leading-[22px] text-richblack-200 text-[14px]'>
                            <p>Our friendly teams is here to help</p>
                            <p>@email address</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row w-[402px] gap-[20px] items-start mx-auto '>
                    <div>
                        <BiWorld fontSize={25}/>
                    </div>
                    <div>
                        <h2 className='font-inter text-[18px] leading-[26px] text-richblack-5 '>Visit us</h2>
                        <div className='font-inter leading-[22px] text-richblack-200 text-[14px]'>
                            <p>come and say hello on our office HQ</p>
                            <p>Here is the location / address</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row w-[402px] gap-[20px] items-start mx-auto '>
                    <div>
                        <FiPhoneCall fontSize={25}/>
                    </div>
                    <div>
                        <h2 className='font-inter text-[18px] leading-[26px] text-richblack-5 '>call us</h2>
                        <div className='font-inter leading-[22px] text-richblack-200 text-[14px]'>
                            <p>Mon - Fri From 8pm to 5pm</p>
                            <p>+1234566789</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-bgcolor border-[1px] border-bordercolor px-[20px] py-[50px] rounded-2xl'>
                <h1 className='text-[36px] leading-[44px] font-inter px-[20px]'>Got a Idea? We've got the skills.<br/> Let's team up</h1>
                <p className='font-inter leading-[22px] text-richblack-200 text-[18px] px-[25px] pt-[10px] pb-[30px]'>Tall us more about yourself and what you're got in mind.</p>
                <ContactUsForm/>
            </div>
        </div>
       <div className='mt-[200px]'>
        <FooterForAll/>
       </div>
    </div>
  )
}
