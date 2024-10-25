import "./App.css";
import NewProduct from "./components/NewProduct";
import Product from "./components/Product";

const response = [
  {
    id:1,
    title:"Nirma",
    amount:400,
    date:new Date(1998,5,20)
  },
  {
    id:2,
    title:"Ghadi",
    amount:300,
    date:new Date(1975,12,10)
  },
  {
    id:3,
    title:"surfExcel",
    amount:400,
    date:new Date(1965,1,23)
  },
  {
    id:4,
    title:"Tide",
    amount:400,
    date:new Date(1958,9,15)
  }

]
function inApp(product)
{
  console.log("in App")
  console.log(product);
}
function App() {   
  return (
    <div>
      <Product item={response}></Product>   
      <NewProduct onApp = {inApp}></NewProduct>   
    </div>
  );
}

export default App;
