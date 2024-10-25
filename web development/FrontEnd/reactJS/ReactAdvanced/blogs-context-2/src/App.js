import BlogPage from "./Pages/BlogPage";
import Home from "./Pages/Home";
import TagPage from "./Pages/TagPage";
import Category from "./Pages/Category";
import { useContext, useEffect } from "react";
import { Routes,Route, useSearchParams, useLocation } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import "./App.css";

export default function App() {

  const {fetchBlog} = useContext(AppContext);

  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;     // ?? syntax to assign by default value
    if(location.pathname.includes("tags"))
    { 
      // iska matlab tag show krna hai
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");   //split the path on the basis of "/" and then after last "/" value find out using at(-1) then replace "-" by " " space 
      fetchBlog(Number(page),tag);
    }
    else if(location.pathname.includes("categories"))
    {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlog(Number(page),null,category);
    }
    else
    {
      fetchBlog(Number(page));
    }
  },[location.pathname,location.search]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blog/:blogId" element={<BlogPage/>}></Route>
        <Route path="/tags/:tag" element={<TagPage/>}></Route>
        <Route path="/categories/:category" element={<Category/>}></Route>
      </Routes>
    </div>
  );
}
