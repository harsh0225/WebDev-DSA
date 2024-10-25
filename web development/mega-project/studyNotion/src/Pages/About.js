import React from 'react'
import {HighLightText} from '../Components/core/Home/HighLightText'
import aboutus1 from '.././assets/Images/aboutus1.webp';
import aboutus2 from '.././assets/Images/aboutus2.webp';
import aboutus3 from '.././assets/Images/aboutus3.webp';
import { Quote } from '../Components/core/About/Quote';
import foundingStory from '../assets/Images/FoundingStory.png'
import { StatsComponent } from '../Components/core/About/StatsComponent';
import { LearningGrid } from '../Components/core/About/LearningGrid';
import { ContactForm } from '../Components/core/About/ContactForm';
import { FooterForAll } from '../Components/Common/FooterForAll';

export const About = () => {
  return (
    <div >
        <div className=' flex flex-col items-center justify-center'>
        {/* section 1 */}
            <section className='w-[100vw] h-[500px] bg-richblack-800 '>
                <div className='relative  flex flex-col bg-richblack-800 mx-auto '>
                    <header className='flex flex-col text-center lg:w-[913px] mx-auto pt-[100px] '>
                        <h2 className='text-richblack-5 font-inter text-[36px] leading-[44px] text-center '> Driving Innovation in Online Education for </h2>
                        <div className='text-[40px]'>  <HighLightText text={"Bright Future"} /></div>
                        <p className='text-[16px] text-richblack-200 pt-[20px]'>
                            Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter 
                            future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
                        </p>
                    </header>
                    <div className='w-full mx-auto flex items-center justify-center'>
                        <div className='  absolute top-[350px]  flex w-11/12 items-center justify-center gap-[30px]'>
                            <img src={aboutus1} alt="image1" className='w-[384px] h-[311px]'/>
                            <img src={aboutus2} alt="image2" className='w-[384px] h-[311px]'/>
                            <img src={aboutus3} alt="image3" className='w-[384px] h-[311px]'/>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 2 */}
            <section className=' mt-[200px] mx-auto '>
                <div >
                    <Quote/>
                </div>
            </section>

            {/* section 3 */}
            <section className='text-richblack-5 w-11/12 my-[120px] '>
                <div className='flex flex-col gap-[100px] w-[1200px] mx-auto'>
                    {/* story 1 */}
                    <div className='flex flex-row gap-[120px] px-[30px] items-center justify-center '>
                        
                        <div className='w-[50%] flex flex-col gap-5'>
                            <h2 className='font-inter text-[36px] leading-[44px] font-semibold text-red-600'>Our Founding Story </h2>

                            <p className='font-inter text-[16px] leading-[24px] text-richblack-300'> 
                                Our e-learning platform was born out of a shared vision and passion for transforming education.
                                It all began with a group of educators, technologists, and lifelong learners who recognized the need 
                                for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                            </p>

                            <p className='font-inter text-[16px] leading-[24px] text-richblack-300'>
                                As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. 
                                We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. 
                                We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
                            </p>

                        </div>

                        <div className='w-[50%]'>
                            <img src={foundingStory} alt="image"/>
                        </div>

                    </div>

                    {/* story 2 */}
                    <div className='flex flex-row   gap-[120px] px-[30px]  items-center justify-evenly mx-auto '>
                        <div className='w-[50%] flex flex-col gap-5'>
                            <h2 className='font-inter text-[36px] leading-[44px] font-semibold text-orange-400'>Our Vision</h2>

                            <p className='font-inter text-[16px] leading-[24px] text-richblack-300'>
                                With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn.
                                Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology 
                                with engaging content, fostering a dynamic and interactive learning experience.
                            </p>
                        </div>
                        
                        <div className='w-[50%] flex flex-col gap-10'>
                            <h2 className='font-inter text-[36px] leading-[44px] font-semibold text-cyan-400'>Our Mission</h2>

                            <p className='font-inter text-[16px] leading-[24px] text-richblack-300'>
                                our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, 
                                collaborate, and learn from one another.  We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this 
                                spirit of collaboration through forums, live sessions, and networking opportunities.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            {/* section 4 */}
            <section  className='w-[100vw] bg-richblack-800 h-[254px]'>
                <StatsComponent/>
            </section>

            {/* section 4 */}
            <section className='flex flex-col w-[1200px]' >
                <LearningGrid/>
                <ContactForm/>
            </section>
        </div>

        <div className='pt-[100px]'>
            <FooterForAll />
        </div>

    </div>
  )
}
