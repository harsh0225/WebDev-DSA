import React from "react";
import Navbar from "./component/Navbar";
import Cards from "./component/Cards";
import Filter from "./component/Filter";
import { filterData,apiUrl } from "./data";
import { toast } from "react-toastify";
import { useState,useEffect } from "react";
import {Spinner} from "./component/Spinner";

const App = () => {

  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{

      let res = await fetch(apiUrl);
      let output = await res.json();
      console.log(output);
      setCourses(output.data);  
    }
    catch{
      toast.error("something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div> 
        <Navbar/> 
      </div>

      <div  >
        <Filter filterData={filterData}
        setCategory = {setCategory}
        category={category}
        />
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/> )  :  (<Cards courses={courses} category={category}/>)
        }
      </div>

    </div>
    );
};

export default App;