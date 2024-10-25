import React, { useState } from "react";
import data from "./data";
import Tours from "./component/Tours";

const App = () => {
  const [tours,setTours] = useState(data);
  function removeTour(id){
        const newTour = tours.filter(tour => id !== tour.id);
        setTours(newTour); 
  }

  function refresh_page()
  {
    setTours(data);
  }

  if(tours.length === 0)
  {
    return(
      <div className="refresh">
        <h2>No tours left</h2>
        <button className="btn-white" onClick={refresh_page}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour = {removeTour}></Tours>
    </div>
  );
};

export default App;
