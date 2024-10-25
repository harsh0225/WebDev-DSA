import {MdDelete} from "react-icons/md"
import { removeCart } from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

export default function CartItem(props)
{

    const dispatch = useDispatch();

    function removefromCart()
    {
        dispatch(removeCart(item));
        toast.error("item is remove from cart")
    }

    const item = props.item;
    return (
        <div className=" w-[400px] border py-[20px] px-[20px] rounded-lg">
            
            <div className="flex justify-between gap-[50px]">
                <img src={item.image } className='h-[150px] ml-[20px]' alt="image not found"/>
                <h1 className='flex justify-center items-center text-gary-700 font-semibold text-lg mt-1 w-[150px]'>{item.title.substring(0,25) + "..."}</h1>
            </div>

          

            <div>
    
                <h1  className=' text-gray-400 font-normal text-[13px]  mt-[10px]'>{item.description}</h1>

                <div className="w-full h-[1px] bg-green-600 my-[20px]"></div>

                <div className="flex justify-around mt-[20px] text-[20px]">
                    <p className='text-green-400 font-semibold'>$ {item.price}</p>
                    <button onClick={removefromCart} className="w-[35px] h-[35px] flex justify-center items-center bg-red-400 rounded-full border border-gray-400 hover:bg-red-500 transition duration-300">
                        <MdDelete />
                    </button>
                </div>
            </div>


        </div>
    )
}