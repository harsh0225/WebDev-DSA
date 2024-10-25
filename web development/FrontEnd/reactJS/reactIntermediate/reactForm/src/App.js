import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { isVisible } from '@testing-library/user-event/dist/utils';

function App() {

  const [formData,setFormData] = useState({firstName:"" , lastName:"" , email:"" , comments:"" , isVisible:true , mode:"" , favCar:""});
  

  console.log(formData);

  function changeHandler(event)
  { 
    const {name,value,type,checked} = event.target;
    setFormData(prevData => {
      return {
        ...prevData,
       [name] : type === "checkbox" ? checked : (value)
      }
    })
  }

  function eventHandler(event)
  {
    event.preventDefault();
    console.log("finally printing the data .....");
    console.log(formData); 
  }


  return (
    <div className="App" onSubmit={eventHandler}>
      <form>
        <input type='text' 
        placeholder='first name'
        onChange={changeHandler}
        name="firstName"
        />
        <br></br>

        <input type='text' 
        placeholder='last name'
        onChange={changeHandler}
        name="lastName"
        />
        <br></br>

        <input type='text' 
        placeholder='emial'
        onChange={changeHandler}
        name="email"
        />
        <br></br>

        <textarea
        placeholder='enter your comments here'
        onChange={changeHandler}
        value={formData.comments}
        name="comments"
        />
        <br></br>

        <input
        type="checkbox"
        name="isVisible"
        value={formData.isVisible}
        onChange={changeHandler}
        id="isVisible"
        checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>I Am Visible ?</label>
        <br></br>
        <br></br>

        <input
        type='radio'
        onChange={changeHandler}
        name="mode"
        value={"Online-Mode"}
        id="Online-Mode"
        />
        <label htmlFor='Online-Mode'>Online Mode</label>
        <br></br>

        <input
        type='radio'
        onChange={changeHandler}
        name="mode"
        value={"Offline-Mode"}
        id="Offline-Mode"
        />
        <label htmlFor='Online-Mode'>Offline Mode</label>
        <br></br>

        <label htmlFor='favCar'>Tell Me Your Favorite Car ?</label>
        <select
        onChange={changeHandler}
        name="favCar"
        value={formData.favCar}
        id="favCar"
        >
        <option value="G-Wagon">G-Wagon</option>
        <option value="Bolero">Bolero</option>
        <option value="Fortuner">Fortuner</option>
        <option value="Thar">Thar</option>
        <option value="Scorpio">Scorpio</option>
        </select>

        <br></br>

        <button>submit</button>

      </form>
    </div> 
  );
}

export default App;
