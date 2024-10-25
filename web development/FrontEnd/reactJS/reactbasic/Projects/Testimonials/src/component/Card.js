import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

export default function Card(props)
{
    let review =  props.review
    return(
        <div className="flex flex-col md:relative ">
            <div className="absolute top-[-7rem] z-[10] ">
                <img src={review.image} alt={"loading problem"} className="aspect-square rounded-full w-[ 140px] h-[140px] z-[25]"></img>
                <div className="rounded-full w-[140px] h-[140px] bg-violet-500 absolute top-[-6px] left-[10px] z-[-20]"></div>
            </div>
            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize">{review.name}</p>
                <p className="traking-wider text-center mt-[7] text-violet-300 uppercase text-sm">{review.job}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft/>
            </div>

            <div className="text-center mt-4 text-slate-500">
                <p>{review.text}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5 ">
                <FaQuoteRight/>
            </div>
        </div>
    )
}