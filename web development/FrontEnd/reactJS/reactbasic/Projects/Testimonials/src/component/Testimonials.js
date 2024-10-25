import { useState } from "react";
import Card from "./Card"
import { FiChevronLeft, FiChevronRight} from "react-icons/fi"

export default function Testimoials(props)
{
    const [index,setIndex] = useState(0);
    let reviews = props.reviews;
    function leftShiftHandler()
    {   
        if((index-1) < 0 )
        {
            setIndex(reviews.length-1);
        }
        else
        {
            setIndex(index-1);
        }
    }

    function rightShiftHandler()
    {
        if(index+1 > reviews.length-1)
        {
            setIndex(0);
        }
        else
        {
            setIndex(index+1);
        }
    }

    function surpriseHandler()
    {
        setIndex(Math.floor(Math.random() * reviews.length));
    }

    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center item-center mt-10 p-10 transition-all duration-700 rounded-2xl hover:shadow-xl">
            <Card review = {reviews[index]}/>

            <div className="flex justify-center text-3xl mt-5 gap-3 text-violet-300 font-bold">
                <button className="cursur-pointer hover:text-violet-500 transition-all duration-[0.3s]" onClick={leftShiftHandler}>
                    <FiChevronLeft />
                </button>
                <button className="cursur-pointer hover:text-violet-500 transition-all duration-[0.3s]" onClick={rightShiftHandler}>
                    <FiChevronRight/>
                </button>
            </div>

            <div className="">
                <button className="bg-violet-400 px-10 py-2 rounded-md font-bold text-white text-lg hover:bg-violet-500 transition-all duration-200 cursor-pointer mt-4" onClick={surpriseHandler}>
                    Surprise Me
                </button>
            </div>
        </div>
    )
}