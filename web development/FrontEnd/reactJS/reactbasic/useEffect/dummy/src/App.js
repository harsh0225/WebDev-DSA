import { useEffect, useState } from 'react';



function App() {
  const [text,setText] = useState('');

  function eventHandler(event)
  {
    console.log(event.target.value);
    setText(event.target.value);
  }
  /*variation 1 

  useEffect(() => {
    console.log("UI IS UPDATED");
  });  */

  /* useEffect() variation 2
  
  useEffect(() => {
    console.log("UI IS UPDATED");
  },[]);  */

  /* useEffect() variation 3
  useEffect(() => {
    console.log("UI is UPDATED");
  },[text])*/

  // useEffect() variation 4

  /*useEffect(() => {
    console.log("event is added");

    return (() => {
      console.log("event is removed")
    })
  },[text]);*/

 


  return (
    <div className="App">
      <input type="text" value={text} onChange={eventHandler}/>
    </div>
  );
} 

export default App;
