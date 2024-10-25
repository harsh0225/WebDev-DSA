import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../component/Blogs';
import Header from '../component/Header';
import Footer from '../component/Footer';

const TagPage = () => 
{

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div>
            <button onClick={() => navigation(-1)} >Back</button>
            <h2>
                Blogs Tagged <span>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Footer/> 
    </div>
  )
}
export default TagPage