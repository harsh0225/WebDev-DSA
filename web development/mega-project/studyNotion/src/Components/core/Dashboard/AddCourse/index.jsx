import React from 'react'
import { RenderSteps } from './RenderSteps'

export const AddCourse = () => {
  return (
    <div className='text-white w-[1000px]'>
        <div className="flex w-full items-start gap-x-6">
            <div  className="flex flex-1 flex-col">
                <h1 className="mb-14 text-3xl font-medium text-richblack-5">Add Course</h1>
                <div className="flex-1">
                    <RenderSteps/>
                </div>
            </div>
            <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
                <p className='font-inter text-[18px] leading-[26px] font-semibold mb-[30px]'>code upload tips</p>
                <ul className='flex flex-col gap-[15px] font-inter text-[14px] leading-[20px] '>
                    <li> <span className='text-yellow-50 text-[20px]'>⦿</span> Set the Course Price option or make it free.</li>
                    <li><span className='text-yellow-50 text-[20px]'>⦿</span> Standard size for the course thumbnail is 1024x576.</li>
                    <li> <span className='text-yellow-50 text-[20px]'>⦿</span> Video section controls the course overview video.</li>
                    <li><span className='text-yellow-50 text-[20px]'>⦿</span> Course Builder is where you create & organize a course.</li>
                    <li><span className='text-yellow-50 text-[20px]'>⦿</span> Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
                    <li> <span className='text-yellow-50 text-[20px]'>⦿</span> Information from the Additional Data section shows up on the course single page.</li>
                    <li> <span className='text-yellow-50 text-[20px]'>⦿</span> Make Announcements to notify any important</li>
                    <li><span className='text-yellow-50 text-[20px]'>⦿</span> Notes to all enrolled students at once.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
