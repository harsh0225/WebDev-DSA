export default function Filter(props)
{

    let setCategory = props.setCategory;
    let category = props.category;
    function filterHandler(title)
    {   
        setCategory(title);
    }
    return(
        <div className="w-11/12 flex flex-wrap space-x-4 gap-y-4 py-4 justify-center">
            {
                props.filterData.map((data) => {
                    return(<button 
                        className={`text-lg px-2 py-1 rounded-md font-medium text-white
                        bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                        ${category === data.title ?
                             "bg-opacity-60 border-white" :
                             "bg-opacity-40 border-transparent"}`
                            }
                        key={data.id}
                        onClick={() => filterHandler(data.title)}
                        >
                        {data.title}
                        </button>)
                })
            }
        </div>
    )
} 