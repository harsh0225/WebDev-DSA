import React from 'react'

const Stats  = [
    { count:"5k" , label : "Active Student" },
    { count:"10+" , label : "Mentors" },
    { count:"200+" , label : "Courses" },
    { count:"50+" , label : "Awards" }
]

export const StatsComponent = () => {
  return (
    <section className='text-richblack-5 w-11/12 flex flex-col items-center justify-between mx-auto my-[80px]  '>
            <div className='flex flex-row items-center justify-evenly   w-11/12 '>
                {
                    Stats.map((data,index) => {
                        return (
                            <div className='flex flex-col gap-4'>
                                <h2 className='font-inter text-[30px] leading-[38px] text-center text-richblack-5'>{data.count}</h2>
                                <p className='font-inter text-[16px] leading-[24px] text-center text-richblack-300'>{data.label}</p>
                            </div>
                        )
                    })
                }
            </div>
    </section>
  )
}
