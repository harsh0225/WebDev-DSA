import { useState } from "react";
import "./ProductForm.css";
export default function ProductForm(props)
{
    const [newTitle,setTitle] = useState('');
    const [newDate,setDate] = useState('')

    function titleChangeHandler(event)
    {
        setTitle(event.target.value)
    }

    function dateChangeHandler(event)
    {
        setDate(event.target.value);
    }   

    function submitHandler(event)
    {   
        event.preventDefault();  
        const productData = {
            title : newTitle,
            date : newDate
        }
        props.onNewProduct(productData);

        setTitle('');
        setDate('');
    }

    return(
        <form className="Form" onSubmit={submitHandler}>
            <div className='input_Info'>
                <div className='new-product_controls'>
                    <label>Title</label>
                    <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-product_controls'>
                    <label>Date</label>
                    <input type='date' value={newDate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
                </div>
            </div>
            <div className="new-product_button">
                <button type="submit">Add Product</button>
            </div>
        </form>
    )
}