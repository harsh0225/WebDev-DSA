import React from 'react'
import { HighLightText } from '../Home/HighLightText';
import { Link } from 'react-router-dom';
import { CTAButton } from '../Home/CTAButton';

const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highlightText: "Anyone, Anywhere",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 4,
      heading: `Rating "Auto-grading"`,
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
  ];

export const LearningGrid = () => {


  return (
    <div className=' grid  grid-col-1 lg:grid-cols-4 grid-rows-2 mb-10 p-5 lg:w-fit mt-[100px]'>
        {
            LearningGridArray.map((card,index) => {
                return (
                    <div key={index}
                        className={`${index === 0 && "lg:col-span-2 w-full "} ${card.order % 2 === 1 ?   "bg-richblack-700 lg:h-[280px] p-5" : card.order > 0 && "bg-richblack-800 lg:h-[280px]"} ${card.order === 3 && "lg:col-start-2"} flex flex-col items-center justify-center  `}>
                        {
                            card.order < 0
                            ?
                            (  
                                <div className='flex flex-col items-start justify-center text-[36px] bg-richblack-900 px-[30px] '>
                                    <h2 className='text-richblack-5 leading-[24px] font-inter'>{card.heading}</h2>
                                    <HighLightText text={card.highlightText}/>
                                    <p className='text-[16px] leading-[24px] mt-5 font-inter text-richblack-300'>{card.description}</p>
                                    <Link to={card.BtnLink} className='mt-[60px]' >
                                        <CTAButton active={true}>{card.BtnText}</CTAButton>
                                    </Link>
                                </div>
                            )
                            :
                            (
                                <div className='text-richblack-5 flex flex-col justify-start gap-[10px] h-[250px] p-[32px] text-[14px] '> 
                                    <h1 className='h-[52px] text-[18px] font-inter text-richblack-5 leading-[25px]'>{card.heading}</h1>
                                    <p className=' text-[14px] text-richblack-300 leading-[22px]'>{card.description}</p>
                                </div>
                            )
                        }
                    </div>
                )
            })
        }
    </div>
  )
}
