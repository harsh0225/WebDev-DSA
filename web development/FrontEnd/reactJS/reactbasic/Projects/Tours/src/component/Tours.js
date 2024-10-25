import Card from "./Card";

export default function Tours(props)
{
         return( 
            <div className="container">
                <div>
                    <h2 className="title">Plan With Love</h2> 
                </div>
                <div className="cards">
                    {
                        props.tours.map((tour) => 
                        {
                            return(<Card tour={tour} removeTour = {props.removeTour}></Card>);
                        }) 
                    } 
                </div>
            </div>
         )
}