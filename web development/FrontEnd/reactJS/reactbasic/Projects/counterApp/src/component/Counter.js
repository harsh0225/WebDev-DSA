import { useState } from "react";
import "./Counter.css";
import PlusMinus from "./PlusMinus";
import Reset from "./Reset";
function Counter()
{
    const [value,setValue] = useState(0);
    function inCounter()
    {
        setValue(0);
    }
    function change_value(val)
    {
        setValue(val);
    }
    return(
        <div className="main_counter">
            <h2 className="header">Increment & decrement</h2>
            <PlusMinus fun={change_value} content={value}>{value}</PlusMinus>
            <Reset reset = {inCounter} className="reset_value"></Reset>
        </div>
    )
}

export default Counter;