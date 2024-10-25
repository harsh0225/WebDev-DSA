import React, { useState,useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from "../component/Header";
import { BlogDetails } from '../component/BlogDetails';



export default function Blog() {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog,setBlog] = useState(null);
    const [relatedBlogs,setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();

    const {setLoading,loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);
    async function fetchRelatedBlogs()
    {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(blogId)
        {
            fetchRelatedBlogs();
        }
    },[location.pathname])

  return (
    <div>
        <Header/>
        <div>
            <button onClick={() => navigation(-1)}>Back</button>
        </div>
        {
            loading ? <p>loading</p> : 
            blog ? (

                <div>
                    <BlogDetails post={blog}/>
                    <h2>Related Blogs</h2> 
                    {
                        relatedBlogs.map((post,index) => {
                            return(<div key={index}>
                                <BlogDetails post={post}/>
                            </div>)
                        })
                    }
                </div>
            ) : 
            (<div>No blog found</div>)
          
        }
    </div>
  )
}
