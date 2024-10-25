import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { addCart, removeCart } from '../redux/slices/CartSlice';

export default function Product({post}) {

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    function addToCart() {
        dispatch(addCart(post))
        toast.success("item is added")
    }

    function removeFromCart(){
        dispatch(removeCart(post));
        toast.error("item is remove from cart");
    }

  return (
    <div className='flex flex-col items-center justify-between hover:scale-105 transition duration-[0.28s] ease-in  gap-3 p-4 mt-10 ml-5 rounded-xl border border-gray-300 hover:shadow-2xl'>
        <div>
            <p className='text-gary-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title.substring(0,20) + "..."}</p>
        </div>
        <div >
            <p className='w-40 text-gray-400 font-normal text-[10px] text-left '>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>
        <div >
            <img src={post.image} alt="image not found" className='h-[180px]'/>
        </div>
        <div className='flex gap-12 justify-center items-center w-full mt-5'>
            <div>
                <p className='text-green-400 font-semibold'>${post.price}</p>
            </div>
            <div >
                {
                    cart.find((p) => p.id === post.id ) ? 
                    (<button onClick={removeFromCart} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 hover:bg-gray-700 hover:text-white transition duration-300 '>remove item</button>)
                    :
                    (<button onClick={addToCart} className='text-gray-700 border-2 border-gray-700 rounded-full  font-semibold text-[12px] p-1 px-3  hover:bg-gray-700 hover:text-white transition duration-300'>Add to cart</button>)
                }
            </div>
        </div>
    </div>
  )
}
