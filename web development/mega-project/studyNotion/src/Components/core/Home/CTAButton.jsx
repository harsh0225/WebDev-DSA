import React from 'react'
import { Link } from 'react-router-dom'

export const CTAButton = ({children,active,linkto}) => {
  return (
    <Link to={linkto}>
        <div className={`text-center text-[16px] font-medium px-6 py-3 leading-6 rounded-md first-letter 
                        ${active ? "bg-yellow-50 text-black": "bg-richblack-800"}
                        hover:scale-95 transition-all duration-200
        `}>
            {children}
        </div>
    </Link>
  )
}
