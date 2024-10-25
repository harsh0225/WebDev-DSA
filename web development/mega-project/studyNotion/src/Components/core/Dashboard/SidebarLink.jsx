import React from 'react'
import * as Icons from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { matchRoutes,matchPath } from 'react-router-dom';


export const SidebarLink = ({link,iconName,}) => {

    const Icon = Icons[iconName];
    const location = useLocation();
    const dispatch = useDispatch();

    const matchRoute1 = (route) => {
        return matchPath({path:route},location.pathname);
    }

  return (
    <NavLink
        to={link.path}
        className={`${matchRoute1(link.path) ? "bg-yellow-800" : "bg-opacity-0"} relative px-8 py-2 font-medium text-white flex flex-row`}
    >
    
        <span className={`absolute left-0 top-0 h-full w-[0.2rem]  ${matchRoute1(link.path) ? "opacity-100 bg-yellow-50" : "opacity-0" }  `}></span>

        <div className='flex items-center gap-x-2'>
            <Icon className='text-lg'/>
            <span>{link.name}</span> 
        </div>

        </NavLink>
  )
}
