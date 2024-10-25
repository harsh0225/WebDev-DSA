import { useState } from "react" 

export default function Card(props)
{
    const [readmore,setReadmore] = useState(true);
    const description = readmore ? `${props.tour.info.substring(0,200)}` : props.tour.info;

    function readmore_change()
    {
        setReadmore(!readmore); 
    }

    function removeTour()
    {
        props.removeTour(props.tour.id);
    }

    return (
        <div className="card">
            <img src={props.tour.image} className="image" alt="NoImageFound"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-prise">₹ {props.tour.price}</h4>
                    <h4 className="tour-name">{props.tour.name}</h4>
                </div>
            
                <div className="description">
                    {description}
                    <span onClick={readmore_change} className="read-more ">{readmore ? `......read more` : `   show less`}</span>
                </div>
            </div>
            
            <button className="btn-red" onClick={removeTour} > Not Interested</button>
        </div>
    )
}