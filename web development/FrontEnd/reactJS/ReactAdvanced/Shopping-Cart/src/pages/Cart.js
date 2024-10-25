import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../component/CartItem'


export const Cart = () => {

  const {cart} = useSelector((state) => state) 
  const [totalAmount,setTotalAmount] = useState(0) 

  useEffect(() => {
    setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0));
  },[cart])

  return (
    <div>
      <div className='my-[70px]'>
        {
          (cart.length > 0)
          ?
          (<div className='flex flex-row  max-w-7xl  '>
              <div className=' flex flex-col justify-between items-center mx-auto gap-[30px]'>
              {
                cart.map((item,index) => {
                  return (
                    <CartItem key={item.id}  item = {item} itemIndex= {index}></CartItem>
                    )
                  })
                }
              </div>
              
              <div className='flex flex-col gap-[20px] w-[400px]'>
                <div className='text-[30px] text-green-600'>Your Cart</div>  
                <div className="w-full h-[1px] bg-green-600 my-[20px]"></div>
                <p className="text-[40px]"> Your summary</p>
                <span className='text-[20px] '>Total items : <span className='text-green-500'>{cart.length}</span></span>

                <div className='mt-[20px]'>
                  <p className='text-[20px] '>Total Amount : <span className='text-green-500'>{totalAmount}</span></p>
                  <button className='mt-[20px] w-[200px] border py-[5px] bg-green-700 text-white rounded-xl'>Check Out Now</button>
                </div>
              </div>

            </div>)
          :
          (
            <div className='w-full h-[600px] flex flex-col justify-center items-center gap-6'>
              <h1 className='text-red-600 text-[25px]'>Cart is empty</h1>
              <Link to="/">
                <button className='w-[160px] py-1 border bg-green-600 text-white  rounded-xl'> Shop now</button>
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}
