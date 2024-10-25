import { useState } from "react";
import "./PlusMinus.css";

function PlusMinus(props)
{

    let val = props.content;


    function plus()
    {
        props.fun(val+1);
    }
    function minus()
    {
        props.fun(val-1);
    }
    return(
        <div className="plusminus">
            <div onClick={minus}>-</div>
            {props.children}
            <div onClick={plus}>+</div>
            
        </div>
    )
}

export default PlusMinus;
