import Random from "./components/Random.js";
import Tag from "./components/Tag.js"


export default function App() {
  return (
    <div className="w-full h-full flex flex-col background items-center">
      <h1 className="bg-white rounded-xl mt-[40px] text-center w-11/12 font-bold text-4xl px-10 py-2 ">RANDOM GIF'S</h1>
      <div className="flex flex-col w-full items-center" >
        <Random className="w-full"/>
        <Tag/>
      </div>
    </div>
  )
}
