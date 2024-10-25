import "./NewProduct.css";
import ProductForm from "./ProductForm";

export default function NewProduct(props)
{
    function inNewProduct(obj)
    {
        console.log("in newProduct");
        console.log(obj);

        // calling inApp function
        props.onApp(obj);           //function in App.js to communicate App.js
    }
    return(
        <div className="new-product">
            <ProductForm onNewProduct = {inNewProduct}/>
        </div>
    );
}

