

export default function Card(props){
    return(
        <div>
            <div>   
                <img src={props.image.url} alt={props.image.alt}></img>
                <div>
                    <button>
                      
                    </button>
                </div>
                <div>
                    <p>{props.course.title}</p>
                    <p>{props.course.description}</p>
                </div>
            </div>
        </div>
    )
}