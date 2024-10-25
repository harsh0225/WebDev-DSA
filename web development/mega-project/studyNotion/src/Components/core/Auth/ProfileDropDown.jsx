import React, { useRef, useState } from 'react'
import {BsSearch} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { logout } from '../../../services/operations/authApis';
import { Link, useNavigate } from 'react-router-dom';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

export const ProfileDropDown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.profile);

  const [open ,setOpen] = useState(false);

  const ref = useRef();

  if(!user) return null


  //console.log(user)
  return (
    <div className='flex flex-row items-center justify-between gap-5 '>
      <div className='text-white'>
        <BsSearch/>
      </div>

      <div className='text-white'>
        <AiOutlineShoppingCart/>
      </div>

      <div className='text-richblack-5  relative cursor-pointer' onClick={() => setOpen(!open)}>
         <img src={user?.image} className='w-[30px] h-[30px] object-cover rounded-full'/>
         {
            open &&  <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
            ref={ref}
          >
            <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
              <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
                <VscDashboard className="text-lg" />
                Dashboard
              </div>
            </Link>
            <div
              onClick={() => {
                dispatch(logout(navigate))
                setOpen(false)
              }}
              className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
            >
              <VscSignOut className="text-lg" />
              Logout
            </div>
          </div>
         }
      </div>
    </div>
  )
}
