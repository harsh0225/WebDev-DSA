
import { Spinner } from "./Spinner";
import useGIF from "../hooks/useGIF";

export default function Random() {

  const [gif,loading,fetchData] =useGIF(false);

  function clickHandler()
  {
    fetchData();
  }


  return (
    <div className="w-1/2 h-full bg-green-400 rounded-2xl border border-black flex flex-col items-center gap-5 mt-[25px] ">
      <h1 className="text-2xl underline uppercase font-bold mt-[15px] "> A Random Gif</h1>
     {
      loading ? (<Spinner/>) : ( <img src={gif}/>)
     }
      <button onClick={clickHandler}
      className=" bg-white w-9/12 opacity-70 rounded-lg text-lg py-1 mb-[15px]"
      >Generate gif</button>
    </div>
  );
}
