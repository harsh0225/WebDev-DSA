import React from 'react'

export const IconButton = ({text,onclick,children,disable,outline=false,customClasses,type}) => {
  return (
    <div>
        <button disabled={disable} onClick={onclick} type={type}  className="cursor-pointer rounded-md bg-yellow-50 py-2 px-5 font-semibold text-richblack-900">
            {
                children ? (
                    <div className='flex flex-row '>
                        <span>
                            {text}
                        </span>
                            {children }
                    </div>
                )
                :
                (text)
            }
        </button>
    </div>
  )
}
