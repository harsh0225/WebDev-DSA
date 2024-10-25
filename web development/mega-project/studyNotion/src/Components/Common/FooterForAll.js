import React from 'react'
import {FooterLink2} from '../../additionalfiles/data/footer-links';
import { Footer } from '../core/Home/Footer';

export const FooterForAll = () => {
  return (
    <div><div className='w-[100vw] h-[728px]  bg-richblack-800 flex items-center justify-center '>
    <div className=' flex flex-row w-[1200px] mx-auto justify-between gap-[20px] text-richblack-300 leading-[34px] border-b-[1px] border-richblack-500'>

        <div className='flex flex-row w-[548px] justify-between'>
            <div>
                <div>
                    <h3 className='font-bold font-inter text-[16px] leading-[24px] text-richblack-100'>company</h3>
                </div>
                <div className='text-[14px]'>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Affilliates</p>
                </div>
            </div>
            <div>
                <div>
                    <h3 className='font-bold font-inter text-[16px] leading-[24px] text-richblack-100'>Resources</h3>
                </div>
                <div  className='text-[14px]'>
                    <p>Articles</p>
                    <p>Blogs</p>
                    <p>Chart Sheet</p>
                    <p>Code Challanges</p>
                    <p>Docs</p>
                    <p>Project</p>
                    <p>Video Workspace</p>
                </div>
                    
                <div>
                    <h3 className='font-bold font-inter text-[16px] leading-[24px] text-richblack-100'>support</h3>
                </div>
                <p  className='text-[14px]'>Help Center</p>
        
            </div>
            <div>
                <div> 
                    <h3 className='font-bold font-inter text-[16px] leading-[24px] text-richblack-100'>Plans</h3>
                </div>
                <div  className='text-[14px]'>
                    <p>Paid membership</p>
                    <p>For student</p>
                    <p>Business solution</p>
                </div>
                
                <div>
                    <h3 className='font-bold font-inter text-[16px] leading-[24px] text-richblack-100'>community</h3>
                </div>
                <div  className='text-[14px]'>
                    <p>Forums</p>
                    <p>Chapter</p>
                    <p>Event</p>
                </div>

            </div>
        </div>

        <div className='h-[500px] w-[1px] bg-richblack-500'></div>

        <div className='flex flex-row  w-[548px] justify-between mb-10'>
            {
                FooterLink2.length !== 0 
                ?
                FooterLink2.map((section,index) => {
                    return (<Footer key={index} section={section}></Footer>)
                })
                :
                "Footer is empty"    
            }
        </div>

    </div>
    </div>
</div>
  )
}
