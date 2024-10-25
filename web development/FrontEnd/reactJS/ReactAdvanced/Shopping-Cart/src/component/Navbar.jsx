import React from 'react'
import {FaShoppingCart} from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


export default function Navbar(){

    const cart = useSelector((state) => state.cart)

  return (
    <div>
        <nav className='flex items-center justify-between h-20 max-w-6xl mx-auto'>
            <NavLink to="/">
                <div >
                    <img src="../logo.png" className='h-14' ></img>
                </div>
            </NavLink>
            <div className='flex gap-5  items-center justify-center'>
                <NavLink to="/">
                    <p className='text-white'>Home</p>
                </NavLink>
                <NavLink to="/cart" >
                    <div className='text-white relative'>
                        <FaShoppingCart className='text-2xl'/>
                       {
                        cart.length > 0 &&  (<span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5  flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>)
                       }
                    </div>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}
