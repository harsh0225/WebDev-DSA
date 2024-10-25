import React from 'react'
import { useSelector } from 'react-redux'
import { Spinner } from '../Components/core/Home/spinner';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Components/core/Dashboard/Sidebar';

export const Dashboard = () => {

    const {loading:authLoading} = useSelector((state) =>state.auth );
    const {loading:profileLoading} = useSelector((state) => state.profile); 

    if(authLoading || profileLoading)
    {
        return (
            <div className='flex justify-center items-center w-11/12 h-[100vh]'>
                <Spinner/>
            </div>
        )
    }

  return (
    <div className='relative flex min-h-[calc(100vh)-3.5rem] h-[100vh]'>
        <Sidebar/> 
        <div className='h-[calc(100vh)-3.5rem] overflow-auto pb-[300px] '>
            <div className='mx-auto w-[1200px] m-w-[1000px] my-10 pl-[100px]'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}
