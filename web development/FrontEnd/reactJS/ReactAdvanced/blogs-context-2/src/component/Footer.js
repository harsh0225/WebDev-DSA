import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Footer(){
    const {page,setPage,totalPages,handlePageChange} = useContext(AppContext);
  return (
    <div className='flex flex-row h-[60px] w-full gap-[300px] justify-center items-center my-[10px] '>
        <div className='flex gap-[15px]'>
        {
            page > 1 && 
            <button onClick={() => {
                handlePageChange(page-1)
            }}
            className='w-[90px] border py-[3px] rounded-full bg-gray-500 text-white hover:bg-gray-600 transition-all duration-[0.3s] '
            >
             previous
            </button>
        }
        {
            page < totalPages &&
            <button onClick={() => {
                handlePageChange(page+1)
            }}
            className='w-[90px] border py-[3px] rounded-full bg-gray-500 text-white hover:bg-gray-600 transition-all duration-[0.3s] '
            >next</button>
        }
        </div> 
        <p>page {page} of {totalPages}</p>
    </div>
  )
}
