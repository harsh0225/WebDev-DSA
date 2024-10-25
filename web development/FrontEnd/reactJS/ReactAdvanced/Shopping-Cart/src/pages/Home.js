import { useEffect, useState } from "react";
import Spinner from "../component/Spinner";
import Product from "../component/Product"

export default function Home() {
    const API_URL = "https://fakestoreapi.com/products";
  
    const [loading,setloading] = useState(false);
    const [posts ,setPosts] = useState([]);

    async function fetchProductData()
    {
        setloading(true);
        try{
            const result = await fetch(API_URL);
            const data = await result.json();
            console.log("printing the data");
            setPosts(data);
            console.log(data);
            setloading(false);
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProductData();
    },[])
    return( 
        <div className="">
            {
                loading 
                ?
                <div className="w-full h-[80vh] flex justify-center items-center "><Spinner/></div>
                :
                ((posts.length > 0) 
                ?
                (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-10 min-h-[80vh] ">
                    {
                        posts.map((post1) => {
                            return (<Product post={post1}/>)
                        })
                    }
                </div>)
                :
               ( <div className="flex justify-center items-center"><p>No data found</p></div>))
            }
        </div>
    );
  };
  
