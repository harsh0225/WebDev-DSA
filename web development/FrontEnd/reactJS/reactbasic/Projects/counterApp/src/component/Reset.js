import "./Reset.css";
export default function Reset(props)
{

    function reset_value()
    {
        console.log("in reset");
        props.reset(0);
    }
    return(
        <div className="reset" onClick={reset_value}>Reset</div>
    )
}