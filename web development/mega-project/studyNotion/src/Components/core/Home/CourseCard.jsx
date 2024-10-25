import React from 'react'
import AiOutlineUserAdd from 'react-icons/ai'

export const CourseCard = ({card,setCurrentCard,currentCard,key}) => {

  return (
        <div className={`z-20 w-[341px] h-[280px] flex flex-col justify-between  ${card.heading === currentCard ? "bg-white text-richblack-800 box-shadow shadow-2xl shadow-yellow-100 transition-all duration-500" : "bg-richblack-900"}`}
        onClick={() => setCurrentCard(card.heading)}>
            <div className='flex flex-col gap-3 py-[20px] px-[21px] text-[20px] leading-[28px] font-inter'>
                <h2 >{card.heading}</h2> 
                <div className='text-richblack-500 text-[16px] '>
                    {card.description}
                </div>
            </div>

            <div className='flex flex-row py-[16px] px-[24px] justify-around text-richblack-500 border-t-[1px] border-dashed border-richblack-300 font-inter text-[16px] leading-[24px]'>
                <p>{card.level}</p>
                <p>{card.lessionNumber} lesson</p>
            </div>
            
        </div>
    
    
  )
}
