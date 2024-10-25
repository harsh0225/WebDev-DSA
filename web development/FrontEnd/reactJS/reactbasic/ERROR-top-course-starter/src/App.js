import React, { useState,useEffect } from "react";
import Navbar from "./component/Navbar.js";
import Filter from "./component/Filter.js";
import Cards from "./component/Cards.js";
import {filterData,apiUrl} from "./data";
import { toast } from "react-toastify";

const App = () => {

  const [courses,setCourses] = useState(null);

  useEffect( () => {
    async function fetchData() {
      try{
        const result = await fetch(apiUrl);
        const output = await result.json();
        //save data into a variable
        console.log(output);
        setCourses(output.data);
        
      }
      catch{
        toast.error("something went wrong");
      }

    }
    fetchData();
  },[]);

  return (
      <div>
        <Navbar/>
        <Filter data={filterData}/>
        <Cards courses={courses}/>
      </div>
    );
};

export default App;
