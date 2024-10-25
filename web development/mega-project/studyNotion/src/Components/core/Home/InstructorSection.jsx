import React from 'react'
import instructor from '../../../assets/Images/Instructor.png';
import { HighLightText } from './HighLightText';
import { CTAButton } from './CTAButton';
import { FaArrowRight } from 'react-icons/fa6';

export const InstructorSection = () => {
  return (
    <div className='w-11/12 flex flex-row items-ceter mt-16 gap-[98px]'>
        <div className='w-[50%] ' >
            <img src={instructor} 
            className=''
            />
        </div>

        <div className=' w-[40%] flex flex-col justify-center items-start gap-10'>
            <div className='text-[36px] font-600 leading-[44px] font-inter text-left'>
                Become an <HighLightText text={"instructor"}/>
            </div>
            <p className='text-[16px] font-inter font-500 leading-[24px] text-richblack-300 text-left'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
            <CTAButton active={true} >
               <div className='flex flex-row justify-center items-center gap-[10px]'>
                Start Teaching Today
                <FaArrowRight/>
               </div>
            </CTAButton>
        </div>
    </div>
  )
}
