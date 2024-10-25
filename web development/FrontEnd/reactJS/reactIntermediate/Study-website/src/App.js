import "./App.css";
import Navbar from "./component/Navbar"
import {Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import {PrivateRoute} from "./component/PrivateRoute";


function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div className="w-[100%] h-[100vh]  bg-richblack-900 flex flex-col text-white">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/dashboard" element={
          
            <PrivateRoute isLoggedIn = {isLoggedIn}>
              <Dashboard/>
            </PrivateRoute>
          }/>
        </Routes>
    </div>
    );
}

export default App;
