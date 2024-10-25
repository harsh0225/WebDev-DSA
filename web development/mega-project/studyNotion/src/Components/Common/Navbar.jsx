import React, { useState,useEffect } from 'react'
import { Link ,matchPath,useLocation } from 'react-router-dom';
import Logo from '../../assets/Logo/Logo-Full-Light.png';
import {NavbarLinks} from '../../additionalfiles/data/navbar-links';
import { useSelector } from 'react-redux';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { ProfileDropDown } from'../core/Auth/ProfileDropDown';
import { apiConnector } from '../../services/apiconnector';
import { categories } from '../../services/apis';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';



export const Navbar = () => {

    const {token} =  useSelector((state) => state.auth);
    const {user} = useSelector((state) => state.profile);
    const {totalItems} = useSelector((state) => state.cart);
    const location = useLocation();

     const [subLinks,setSubLinks] = useState([]);

    //const subLinks = [1,2]

    const fetchSublinks = async () => {
        try{
            const result = await apiConnector("GET",categories.CATEGORIES_API);
            console.log("printing sublinks result " ,result)
           setSubLinks(result.data.data)
        }
        catch(error){
            console.log(error)
            console.log("can't fetch the category list")
        }
    }

    useEffect(() => {
        console.log(token,user,totalItems);
        fetchSublinks();
    },[])

    const matchRoute = (Route) => {
        return matchPath({path:Route},location.pathname);
    }

  return (
    <div className='flex h-14 items-center border-b-[1px] border-richblack-600' >
        <div className='flex flex-row w-11/12 max-w-[1260px] justify-between items-center mx-auto'>

            { /* Image */}

            <Link to="/" className='cursur-pointer'>
                <img src={Logo} width={160} height={32}/>
            </Link>

            { /* NavLink */}
            
            <nav>
                <ul className='flex gap-x-6 text-richblack-25'>
                    {
                        NavbarLinks.map((link,index) => {
                            return (
                                <li key={index}>
                                    {
                                        link.title === "Catalog"
                                         ?
                                         (  <div className='relative flex flex-row items-center cursor-pointer gap-1 group'>
                                                <p>{link.title}</p>
                                                <MdOutlineKeyboardArrowDown fontSize={23}/>
                                                <div className='invisible absolute left-[50%] top-[50%] flex flex-col rounded-lg bg-richblack-50 text-richblue-900 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 w-[300px] z-20 translate-x-[-50px] translate-y-[30px]'>
                                                    <div className='absolute left-[52%] top-[-8px] h-6 w-6 rotate-45 rounded-sm bg-richblack-50 translate-x-[-90px]'>
                                                    </div>

                                                    <div>
                                                        {
                                                           subLinks.length
                                                            ? 
                                                            (
                                                                <div  className='flex flex-col justify-around items-center  py-[10px] pt-[20px] '>
                                                                    {
                                                                        subLinks.map((value,index) => (
                                                                            <Link to={`/catalog/${value.name
                                                                                ?.split(" ")
                                                                                ?.join("-")
                                                                                ?.toLowerCase()}`} key={index} className='h-[40px] w-[250px] mx-[20px] flex justify-center items-center hover:bg-slate-200 font-inter leading-[24px] text-[17px] text-richblue-900 rounded-lg' >{value.name}</Link>
                                                                        ))
                                                                    }
                                                                </div>
                                                            )  
                                                            : 
                                                            (<div></div>)
                                                        }
                                                    </div>
                                                </div>

                                            </div>)
                                         :
                                         (<Link to={link.path}>
                                            <p className={`${matchRoute(link.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                                                {link.title}
                                            </p>

                                         </Link>) 
                                    }
                                </li>)
                            })
                    }
                </ul>
            </nav>

            { /* Login / Signup / Dashboard*/}
            
            <div className='flex gap-x-4 items-center'>
                {
                    user && user.accountType != "Instructor" && (
                        <Link to="/dashboard/cart"> 
                            <AiOutlineShoppingCart/>
                            {
                                totalItems > 0 &&
                                <span>{totalItems}</span>
                            }
                        </Link>
                    )
                }
                {

                    token === null && (
                        <Link to="/login">
                            <button className='border border-richblack-700 bg-richblack-800 px-[8px] py-[3px] text-richblack-100 rounded-md '>Log in</button>
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to="/signup">
                            <button className='border border-richblack-700 bg-richblack-800 px-[8px] py-[3px] text-richblack-100 rounded-md'>signup</button>
                        </Link>
                    )
                }
                {
                    token !== null && (
                        <ProfileDropDown/>
                    )
                }
            </div>

        </div>

    </div>
  )
}
