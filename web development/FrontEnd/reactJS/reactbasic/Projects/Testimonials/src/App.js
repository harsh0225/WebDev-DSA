import React from "react";
import reviews from "./data.js"

import Testimonials from "./component/Testimonials.js";
const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
     
      <div className="text-center">
        
        <h1 className="text-4xl font-bold ">Our Testimonials</h1>
        
        <div className="bg-[#9333ea] h-[4px] w-1/5 mt-1 mx-auto"> </div>
        
        <Testimonials reviews={reviews}></Testimonials>
      
      </div>
      
    </div>
  );
};

export default App;
