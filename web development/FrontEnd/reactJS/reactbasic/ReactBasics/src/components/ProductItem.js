import "./ProductItem.css";
import ProductDate from "./ProductDate";
import Card from "./Card";
import { useState } from "react";

export default function ProductItem(props)
{
    const [title,setTitle] = useState(props.title);
    function eventHandler()
    {
        console.log("Add To Card successfully");
        setTitle("popcorn");
    }
    return(
        <Card className="product-item">
            <ProductDate date={props.date}></ProductDate>
            <div className='product-item__description'>
                <h2 className="title">{title}</h2>
            </div>
            <button onClick={eventHandler}>Add To Cart</button>
        </Card>
    )
}