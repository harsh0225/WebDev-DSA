import { createContext, useState } from "react";
import useEffect from "react";
import { useNavigate } from "react-router-dom";


//step - 1
export const AppContext = createContext();

const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

export default function AppContextProvider({children})
{
    const [loading,setLoading] = useState(false);   
    const [page,setPage]  = useState(1);
    const [post,setPost] = useState([]);
    const [totalPages,setTotalPages] = useState(null);
    const navigate = useNavigate();

    //data fill pending

    async function fetchBlog(page = 1,tag=null,category=null)
    {
        setLoading(true);
        let url = `${baseUrl}?page=${page}` ;
        if(tag)
        {
            url += `&tag=${tag}`
        }

        if(category)
        {
            url+=`&category=${category}`;
        }

        try{
            const result = await fetch(url);
            const data = await result.json();
    
            setPage(data.page);
            setPost(data.posts);
            setTotalPages(data.totalPages);
            setLoading(false);
        }
        catch{
            console.log("error in fetching data");
            setPost([]);
            setPage(1);
            setTotalPages(null);

        }

    }

    function handlePageChange(page)
    {
        navigate( { search: `?page=${page}`});
        setPage(page);
    }



    const value = {
        loading,
        setLoading,
        page,
        setPage,
        post,
        setPost,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchBlog,
        baseUrl
    }

   


    //step - 2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

