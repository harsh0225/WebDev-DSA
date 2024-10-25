import React from 'react'
import { HighLightText } from '../Home/HighLightText'

export const Quote = () => {
  return (
    <div className='text-richblack-5 py-[90px] px-[120px] w-[1400px] mx-auto h-[336px] '>
       <div className='font-inter text-[36px] leading-[52px] text-center'>
          "We are passionate about revolutionizing the way we learn. Our innovative platform 
          <HighLightText text={" combines technology "}/>
          <span className='text-orange-500'> expertise </span>
          and community to create an
          <span className='text-yellow-100'> unparalleled educational experience"</span>
       </div>
    </div>
  )
}