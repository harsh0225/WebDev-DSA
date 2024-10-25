import React, { useState } from 'react'
import { sidebarLinks } from '../../../additionalfiles/data/dashboard-links'
import { logout } from '../../../services/operations/authApis'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from '../Home/spinner'
import { ACCOUNT_TYPE } from '../../../utils/constants'
import { SidebarLink } from './SidebarLink'
import { useNavigate } from 'react-router-dom'
import {VscSignOut} from 'react-icons/vsc';
import ConfirmationModal from '../../Common/ConfirmationModal'


export const Sidebar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [confirmationModal,setConfirmationModal] = useState(false);
 
    const {user,loading:profileLoading} = useSelector((state) => state.profile);
    const {loading:authLoading} = useSelector((state) => state.auth);


    if(authLoading || profileLoading)
    {
        return (
            <div className='flex justify-center items-center w-11/12 h-[100vh]'>
                <Spinner/>
            </div>
        )
    }


  return (
    <div className=' bg-richblack-800 h-[100vh] border-r-[1px] border-r-richblack-300 '>
        <div className='flex w-[222px] flex-col  h-[calc(100vh)-3.5rem] '>
                <div className='flex flex-col gap-[10px] pt-[20px]'>
                    {
                        sidebarLinks.map((link) => {

                            if(link.type && (user?.accountType === link.type || link.type === "ANY")  )
                            {
                                return(
                                    <SidebarLink  link={link} iconName={link.icon } key={link.id }/>
                                )
                            } 
                        })
                    }
                </div>

                <div className="py-[10px]">
                    <SidebarLink 
                        link={{name:"Setting",path:"dashboard/settings" }}
                        iconName="VscSettingsGear"
                    />

                    <button 
                        onClick={() =>  setConfirmationModal( { 
                            text1:"Are You Sure",
                            text2:"You Will Be Logout Your Account",
                            btn1Text:"Logout",
                            btn2Text:"cancel",
                            btn1Handler:() => dispatch(logout(navigate)),
                            btn2Handler:() => setConfirmationModal(null)
                        }
                    )}
                        className="text-sm font-medium text-richblack-300 px-[10px] py-[10px] justify-between items-center w-[222px] "
                    >
                        <div className="flex flex-row gap-x-2 justify-start items-center w-full pl-[20px]">
                            <VscSignOut className="text-[20px]"/>
                            <span  className="text-[17px] font-medium text-richblack-200 py-[10px] ">logout</span>
                        </div>
                    </button>
                </div>
        </div>

       {
        confirmationModal && <ConfirmationModal modalData={confirmationModal}/>
       }

    </div>
  )
}
