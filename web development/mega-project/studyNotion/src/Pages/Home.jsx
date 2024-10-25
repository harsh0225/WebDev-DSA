import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRightLong} from "react-icons/fa6";
import { HighLightText } from '../Components/core/Home/HighLightText';
import { CTAButton } from '../Components/core/Home/CTAButton';
import Banner from "../assets/Images/banner.mp4" 
import { CodeBlocks } from '../Components/core/Home/CodeBlocks';
import {FooterLink2} from '../additionalfiles/data/footer-links';
import {Footer} from '../Components/core/Home/Footer'
import { TimeLineSection } from '../Components/core/Home/TimeLineSection';
import { LearningLanguage } from '../Components/core/Home/LearningLanguage';
import {InstructorSection} from'../Components/core/Home/InstructorSection';
import { ExploreMore } from '../Components/core/Home/ExploreMore';
import { FooterForAll } from '../Components/Common/FooterForAll';

export default function Home()  {


  return (
    <div >
        {/*section - 1 */}
        <div className='group relative  mx-auto flex flex-col w-11/12 items-center max-w-maxContent text-white justify-between'>
            <Link to="/signup">
                <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95  w-fit'>
                    <div className='flex flex-row justify-between items-center gap rounded-full px-10 py-[5px]  transition-all duration-200 hover:scale-95  w-fit group-hover:bg-richblack-900'>
                        <p>Become an Instructor</p>
                        <FaArrowRightLong/>
                    </div>
                </div>
            </Link>
            
            <div className='text-center text-4xl font-semibold mt-6'>
                Empower Your Future With   
                <HighLightText  text={" Coding Skills"}/> 
            </div>

            <div className='mt-4  w-[90%] text-center text-lg font-bold text-richblack-300 '>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>

            <div className='flex flex-row gap-7 mt-8'>
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>
                
                <CTAButton active={false} linkto={"/login"}>
                    Book A Demo
                </CTAButton> 
            </div>
            <div className='relative w-[1240px] max-w-[1400px] mx-auto my-12  '>

                <video muted loop autoPlay className=' BoxShadow'>
                    <source src={Banner} type="video/mp4 " ></source>
                </video>
    
            </div>

            {/*code section 1*/}
        
            <div className='w-[1200px] '>
                <CodeBlocks position={"lg:flex row"}
                            heading={
                                <div className='text-4xl font-bold'>
                                    unlock Your 
                                    <HighLightText text={" coding potential "}/>
                                    with our online courses
                                </div>
                            }      
                            subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}  

                            ctabtn1={
                                {
                                    btnText:"Try It Yourself",
                                    linkto:"/signup",
                                    active: true
                                }
                            }

                            ctabtn2={
                                {
                                    btnText:"learn more",
                                    linkto:"/login",
                                    active: false
                                }
                            }

                            codeblock={`<!DOCTYPE html>\n <html> \n head><title>Example</title><linkrel="stylesheet"href="styles.css">\n /head> \n </body>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n/nav>`}

                            codecolor={"text-yellow-50"}

                            backgroundGradient={"bg-gradient-to-r from-gradientpink via-gradientbrown to-gradientwhite"}
                ></CodeBlocks>
                <CodeBlocks position={"lg:flex-row-reverse"}
                            heading={
                                <div className='text-4xl font-bold'>
                                    start
                                    <HighLightText text={" coding in seconds "}/>
                                </div>
                            }      
                            subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}  

                            ctabtn1={
                                {
                                    btnText:"Continue Lesson",
                                    linkto:"/signup",
                                    active: true
                                }
                            }

                            ctabtn2={
                                {
                                    btnText:"learn more",
                                    linkto:"/login",
                                    active: false
                                }
                            }

                            codeblock={`<!DOCTYPE html>\n <html> \n head><title>Example</title><linkrel="stylesheet"href="styles.css">\n /head> \n </body>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n/nav>` }

                            codecolor={"text-red-400"}

                            backgroundGradient={"bg-gradient-to-r from-gradientsky1 via-gradientsky2 to-gradientsky3 "}
                ></CodeBlocks>
            </div>
            <div>
                <ExploreMore/>
            </div>

        </div>



        {/*section - 2 */}
        <div className='bg-pure-greys-5 text- richblack-700 bg-slate-100 pt-[150px] mt-[50px]'>
            <div className='homepage_bg h-[320px] bg-slate-200 '>
                <div className='w-11/12 max-w-maxContent flex items-center justify-center mx-auto'>
                        <div className='flex flex-row gap-7 text-white items-center mt-[150px]'>
                            <CTAButton active={true} >
                                <div className="flex flex-row gap-2 justify-center items-center">
                                    <div>
                                        Explore Full Catalog
                                    </div>
                                    <FaArrowRightLong/>
                                </div>
                            </CTAButton>
                            <CTAButton active={false} >
                                <div className="flex flex-row gap-2 justify-center items-center">
                                    <div>
                                        learn more
                                    </div>
                                </div>
                            </CTAButton>
                        </div>
                </div>
            </div>

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7 mt-[50px]'>
                <div className='text-black flex flex-row gap-[50px] '>
                    <div className='text-4xl font-semibold w-[45%]'>
                        Get the skills you need for a <HighLightText text={"job that is demand"}></HighLightText> 
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='w-[594px]'>
                            The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                        </div>
                        <div className='w-[137px] h-[84px]'>
                            <CTAButton active={true}>learn more</CTAButton>
                        </div>
                    </div>
                </div>

                <div className='w-11/12 mb-[100px] flex flex-col gap-[120px]'>
                      <TimeLineSection/>
                      <LearningLanguage/>      
                </div>
            </div>
        </div>


        {/*section - 3 */}

        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-center text-white'>
            <InstructorSection/> 
            <h3 className='text-center text-4xl font-semibold mt-10'>review from other learner</h3>
        </div>

        {/*section - 4 */}

        <div className='mt-[150px]'>
            <FooterForAll/>
        </div>
        
    </div>
  )
}
