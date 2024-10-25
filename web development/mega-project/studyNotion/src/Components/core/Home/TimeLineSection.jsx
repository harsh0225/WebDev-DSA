import React from 'react'

import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from '../../../assets/TimeLineLogo/Logo2.svg';
import logo3 from '../../../assets/TimeLineLogo/Logo3.svg';
import logo4 from '../../../assets/TimeLineLogo/Logo4.svg';
import timeLineImage from '../../../assets/Images/TimelineImage.png';


export const TimeLineSection = () => {

    const timeLine = [
        {
            logo:logo1,
            heading:"Leadership",
            description:"Fully Committed to the success company",

        },
        {
            logo:logo2,
            heading:"Resposibility",
            description:"Students will always be our top priority",
            
        },
        {
            logo:logo3,
            heading:"flexibility",
            description:"The ability to switch is an important skills",
            
        },
        {
            logo:logo4,
            heading:"solve the problem",
            description:"Code your way to a solution",
        }
    ]
  return (
    <div className=''>
        <div className='flex flex-row gap-[100px] items-center justify-center '>
            <div className=' flex flex-col w-[410px] gap-[32px]'>
               {
                    timeLine.map((element,index) => {
                        return (
                            <div>
                                <div className='flex flex-row gap-[40px]'>

                                    <div className='w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full'>
                                        <img src={element.logo}/>
                                    </div>
                                    <div className='leading-[30px]'>
                                        <h2 className='font-semibold text-[18px] '>{element.heading}</h2>
                                        <p className='text-base'>{element.description}</p>
                                    </div>

                                </div>
                                {
                                    index !== 3 ?  <div className='w-[42px] h-0 border-[1px] border-dashed border-richblack-100 rotate-90 m-[5px] mt-[30px]'></div> : <div></div> 
                                }
                            </div>
                        )
                    })
                }
            </div>

            <div className='relative shadow-blue-200'>
                <div className='relative '>
                    <img src={timeLineImage} alt={"time line image"} className=' w-[714px] h-[545px] rounded-xl z-20 BoxShadow'/>
                     
                </div>

                <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-10 left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <div className='flex flex-row items-center border-r border-caribbeangreen-300 px-7'>
                        <h1 className='text-3xl font-bold '>10</h1>
                        <p className='text-caribbeangreen-300 text-sm pl-[20px]'>Years experience</p>
                    </div>
                    <div className='flex gap-5 items-center px-7'>
                        <h1 className='text-3xl font-bold'>250</h1>
                        <p className='text-caribbeangreen-300 text-sm'>Years experience</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
