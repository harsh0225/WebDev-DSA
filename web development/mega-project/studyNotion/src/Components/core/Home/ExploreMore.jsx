import React, { useState } from 'react'
import { HomePageExplore } from '../../../additionalfiles/data/homepage-explore'
import { HighLightText } from './HighLightText';
import { CourseCard } from './CourseCard';


const tabName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
]

export const ExploreMore = () => {

    const [currentTab,setCurrentTab] = useState(HomePageExplore[0].tag);
    const [courses,setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard,setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCard =  (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        console.log(result)
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);

    }

  return (
    <div className='mt-[100px]'>
        <div className='font-semibold text-4xl text-center'>
            Unlock the <HighLightText text={"Power of Code"}/>
        </div>
        <p className='font-inter tsxt-[16px] leading-[24px] text-center text-richblack-300  '>Learn to Build Anything You Can Imagine</p>

        <div className='flex flex-row bg-richblack-800 rounded-full my-5 border-richblack-100 px-1 py-1'>
            {
                tabName.map((element,index) => {
                    return (
                        <div className={`text-[16px] flex items-center cursor-pointer ${(currentTab === element)  ? "text-richblack-5 bg-richblack-900 font-medium" : "text-richblack-200 "} rounded-full transition-all duration-300  hover:bg-richblack-900 hover:text-richblack-5 px-7 py-3 `} 
                        key={index}
                        onClick={() => setMyCard(element)} >{element}</div>
                    )
                })
            }
        </div>

        <div className='lg:mt-[180px] relative'>
            <div className=' absolute flex flex-row gap-[36px]  top-[-100px]  left-[-200px]'>
                {
                    courses.map((element,index) => {
                        return (
                            <CourseCard
                                card={element}
                                key={index}
                                currentCard={currentCard}
                                setCurrentCard={setCurrentCard }
                            />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
