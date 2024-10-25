import "./App.css";
import {useState} from "react"

function App() {

  const [formData,setFormData] = useState({
    firstName:"" , 
    lastName:"" , 
    middleName:"",
    email:"" , 
    phoneNo:"",
    Country:"India",
    city:"",
    state:"",
    postal:"",
    address:"",
    comments:false,
    candidate:false,
    offers:false,
    PushNotification:""
    });

  function changeHandler(event)
  {
    const {name,type,value,checked} = event.target;
    setFormData(prevData => {
      return {
        ...prevData,
        [name] : type === "checkbox" ? (checked) : (value)
      }
    })
  }

  function clickHandler(event)
  {
    event.preventDefault();
    console.log("finally printing data")
    console.log(formData)
  }

  return (
    <div className="flex flex-col items-center justify-center mt-2 w-[800px] border-2 mx-auto rounded-[10px]">
      <form className="w-[100%] p-[30px] flex flex-col ">
        <label htmlFor="firstName" className="text-slate-600">First Name</label>
        <br></br>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="harsh"
          value={formData.firstName}
          onChange={changeHandler}
          className=" h-[40px] rounded-[10px] p-[10px] mt-[-20px] border-2"
         />

         <br></br>

         <label htmlFor="middleName" className="text-slate-600">Middle Name</label>
          <br></br>
          <input
            type="text"
            name="middleName"
            id="middleName"
            placeholder="subhash"
            value={formData.middleName}
            onChange={changeHandler}
            className=" h-[40px] rounded-[10px] p-[10px] mt-[-20px] border-2"
          />

         <br></br>

         <label htmlFor="lastName" className="text-slate-600">Last Name</label>
        <br></br>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="bharitkar"
          value={formData.lastName}
          onChange={changeHandler}
          className=" h-[40px] rounded-[10px] p-[10px] mt-[-20px] border-2"
         />

         <br/>

         <label htmlFor="phoneNo" className="text-slate-600">Phone No.</label>
         <br></br>
         <input
           type="text"
           name="phoneNo"
           id="phoneNo"
           placeholder="9878776777"
           value={formData.phoneNo}
           onChange={changeHandler}
           className=" h-[40px] rounded-[10px] p-[10px] mt-[-20px] border-2"
          />

         <br></br>

        <label htmlFor="email" className="text-slate-600">Email</label>
        <br></br>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="harshabcd@gmial.com"
          value={formData.email}
          onChange={changeHandler}
          className=" h-[40px] rounded-[10px] p-[10px] mt-[-20px] border-2"
         />

        <br></br>
        <label className="text-slate-600">select Country</label>
        <br/>
        <select
          name="Country"
          id="Country"
          onChange={changeHandler}
          value={formData.Country}
          className=" h-[40px] rounded-[10px] p-[10px] mt-[-20px] border-2"
        >
          <option>India</option> 
          <option>America</option> 
          <option>UK</option> 
          <option>Nepal</option> 
          <option>Brazil</option> 
        </select>

        <br></br>

        <label htmlFor="address" className="text-slate-600">street Address</label>
        <br></br>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="colony"
          value={formData.address}
          onChange={changeHandler}
          className=" h-[40px] rounded-[10px] p-[10px] mt-[-20px] border-2"
        />

        <br></br>

        <label htmlFor="city" className="text-slate-600">City</label>
        <br></br>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="pune"
          value={formData.city}
          onChange={changeHandler}
          className=" h-[40px] rounded-[10px] p-[10px] mt-[-20px] border-2"
        />

        <br></br>

        <label htmlFor="state" className="text-slate-600">state/province</label>
        <br></br>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="maharashtra"
          value={formData.state}
          onChange={changeHandler}
          className=" h-[40px] rounded-[10px] p-[10px] mt-[-20px] border-2"
        />

        <br></br>

        <label htmlFor="postal" className="text-slate-600">zip/postal-code</label>
        <br></br>
        <input
          type="text"
          name="postal"
          id="postal"
          placeholder="422601"
          value={formData.postal}
          onChange={changeHandler}
          className=" h-[40px] rounded-[10px] p-[10px] mt-[-20px] border-2"
        />

        <br/>

        <fieldset>
          <legend>By Email</legend>
          <div className="flex gap-4">
            <input
            type="checkbox"
            name="comments"
            id="comments"
            onChange={changeHandler}
            checked={formData.comments}
            />
            <div>
              <label htmlFor="comments" className="text-slate-600">comments</label>
              <p className="text-sm text-[#64748b]">get notified when someone comments on posting</p>
            </div>
          </div>

          <br/>

          <div className="flex gap-4">
            <input
            type="checkbox"
            name="candidate"
            id="candidate"
            onChange={changeHandler}
            checked={formData.candidate}
            />
            <div>
              <label htmlFor="candidate" className="text-slate-600">Candidate</label>
              <p className="text-sm text-[#64748b]">get notified when someone comments on posting</p>
            </div>
          </div>

          <br/>

          <div className="flex gap-4">
            <input
            type="checkbox"
            name="offers"
            id="offers"
            onChange={changeHandler}
            checked={formData.offers}
            />
            <div>
              <label htmlFor="offers" className="text-slate-600">offers</label>
              <p className="text-sm text-[#64748b]">get notified when someone comments on posting</p>
            </div>
          </div>
        </fieldset>

        <br/>

        <fieldset>
          <legend className="text-slate-700  ">Push notification</legend>
          <p className="text-slate-500 text-[15px] mb-[15px]">This are dilivered via  sms to your mobile phone.</p>

          <input
            type="radio"
            name="PushNotification"
            id="everything"
            value="everything"  
            onChange={changeHandler}
          />
          <label htmlFor="everything" className="text-slate-600 pl-[20px]">Everything</label>

          <br/>

          <input
            type="radio"
            name="PushNotification"
            id="sameAsEmail"
            value="sameAsEmail"
            onChange={changeHandler}
          />
          <label htmlFor="sameAsEmail" className="text-slate-600 pl-[20px]">Same As Email</label>

          <br/>

          <input
            type="radio"
            name="PushNotification"
            id="NoPushNotification"
            value="NoPushNotification"
            onChange={changeHandler}
          />
          <label htmlFor="NoPushNotification" className="text-slate-600 pl-[20px]">No Push Notification</label>
        </fieldset>

        <button onClick={clickHandler} className="border-2 border-slate-400 w-[100px] h-[35px] rounded-[5px] mx-auto text-white text-[20px] flex justify-center items-center bg-blue-500 hover:bg-blue-700">Submit</button>

      </form>
    </div>
  );
}

export default App;
