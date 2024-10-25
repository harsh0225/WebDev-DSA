
import { useState } from "react";
import { Spinner } from "./Spinner";
import useGIF from "../hooks/useGIF";
export default function Tag() {

  const [tag,setTag] = useState('car');
  const [gif,loading,fetchData] = useGIF(tag);

 function changeHandler(event)
 {
  setTag(event.target.value);
 }

 function clickHandler()
 {
  fetchData();
 } 

 

  return (
    <div className="w-1/2 h-full bg-blue-400 rounded-2xl border border-black flex flex-col items-center gap-5 mt-[25px] ">
      <h1 className="text-2xl underline uppercase font-bold mt-[15px]">  Random {tag} Gif</h1>
     {
      loading ? (<Spinner/>) : ( <img src={gif}/>)
     }

     <input
      className=" bg-white w-9/12 opacity-90 rounded-lg text-lg py-1 mb-[15px] px-3 text-center"
      type="text"
      placeholder="enter name of gif...."
      onChange={changeHandler}
      value={tag}
     />
      <button onClick={clickHandler}
      className=" bg-white w-9/12 opacity-70 rounded-lg text-lg py-1 mb-[15px]"
      >Generate gif</button>
    </div>
  );
}
