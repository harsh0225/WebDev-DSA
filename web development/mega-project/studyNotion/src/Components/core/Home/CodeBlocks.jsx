import React from 'react'
import { CTAButton } from './CTAButton'
import {FaArrowRightLong} from "react-icons/fa6";
import { HighLightText } from './HighLightText';  
import { TypeAnimation } from 'react-type-animation';


export const CodeBlocks  = ({position,heading ,subheading,ctabtn1, ctabtn2,codeblock ,backgroundGradient,codecolor   }) => {
  return ( 
    <div className={`flex ${position} my-20 justify-between gap-10`}>
    
    {/*Section 1 */}
        <div className='w-[500px] flex flex-col gap-8'>

                {heading}
    
            <div className=' text-lg font-bold text-richblack-300'>
                {subheading}
            </div>

            <div className='flex gap-7 mt-7 flex-row'>
                
                <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                    <div className='flex gap-2 items-center justify-center'>
                        {ctabtn1.btnText}
                        <FaArrowRightLong/>
                    </div>
                </CTAButton>

                <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                    {ctabtn2.btnText}
                </CTAButton>
            </div>
        </div>
        {/* section - 2 */}
        <div className='flex flex-row w-[500px] h-fit py-4 bg-bgcolor border-[1px] border-bordercolor'>
            {/* HW bg-gradient */}
            <div className=' text-center flex flex-col w-[10%]  text-richblack-400 font-inter font-bold'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p> 
                <p>9</p>
                <p>10</p>
                <p>11</p>
            </div>

            <div className={` relative w-[90%] flex flex-col text-[16px]  gap-2 font-mono font-bold leading-[22px] ${codecolor} pr-2 backdrop-blur-xl border-inherit`}>
                <TypeAnimation 
                    sequence={[codeblock,10000,""]}
                    repeat={Infinity}
                    cursor={true}
                    omitDeletionAnimation={true}
                    style={
                        {
                            whiteSpace:"pre-line",
                            display:"block",
                        }
                    }
                    className='z-10'
                />
                <div className={`absolute top-[-60px] left-[-80px] w-[372px] h-[257px] z-5 ${backgroundGradient} blur-2xl rounded-full opacity-20`}>
                </div>
            </div>
        </div>
    </div>
  )
}