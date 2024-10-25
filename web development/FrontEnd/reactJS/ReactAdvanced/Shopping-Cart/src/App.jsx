import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar"
import {Cart} from "./pages/Cart"
import Home from "./pages/Home"



export default function App()
{
  return (
    <div>
      <div className="bg-slate-900 ">
        <Navbar  />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

