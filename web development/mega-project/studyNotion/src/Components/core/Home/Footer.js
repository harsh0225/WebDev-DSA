import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = ({section}) => {
  return (
    <div className=''>
      <p className='font-bold font-inter text-[16px] leading-[24px] text-richblack-100'>{section.title}</p>
      {
        section.links.map((links) => {
          return (<Link to={links.link} className='flex flex-col text-[14px]'>{links.title}</Link>)
        })
      }
    </div>
  )
}
