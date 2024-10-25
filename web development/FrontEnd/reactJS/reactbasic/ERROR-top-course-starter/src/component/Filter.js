export default function Filter(props)
{
    return (
        <div>
            {
                props.data.map((Data) => {
                   return( <button>{Data.title}</button>);
                })
            }
        </div>
    )
} 