import React from 'react'
import { HighLightText } from './HighLightText'
import know_your_progress from '../../../assets/Images/Know_your_progress.svg';
import compare_with_other from '../../../assets/Images/Compare_with_others.svg';
import plan_your_lesson from '../../../assets/Images/Plan_your_lessons.svg';
import { CTAButton } from './CTAButton';


export const LearningLanguage = () => {
  return (
    <div className='w-11/12 mx-auto flex flex-col justify-center items-center gap-[52px] mt-[80px]'>
        <div className='flex flex-col justify-center items-center w-[760px] text-center'>
            <h2 className='font-inter text-[36px] leading-[44px] font-semibold'>Your swiss knife for <HighLightText text={" learning any language"}/></h2>
            <p className='leading-[24px]'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>
        </div>

        <div className='flex flex-row items-center justify-center mt-5'>
            <img src={know_your_progress}
                className='object-contain mr-[-100px]'
            />
            <img src={compare_with_other}/>
            <img src={plan_your_lesson} 
                className='object-contain ml-[-140px]'
            />
        </div>
            <CTAButton active={true}>Learn More</CTAButton>
        <div>

        </div>
    </div>
  )
}
