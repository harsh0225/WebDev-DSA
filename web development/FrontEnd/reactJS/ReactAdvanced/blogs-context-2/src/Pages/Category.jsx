import React from 'react'
import Blogs from '../component/Blogs';
import Footer from '../component/Footer';
import Header from '../component/Header';
import { useNavigate,useLocation } from 'react-router-dom';

export default function Category() {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div>
            <button onClick={() => navigation(-1)} >Back</button>
            <h2>
                Blogs category <span>#{category}</span>
            </h2>
        </div>
        <Blogs/>
        <Footer/>
    </div>
  )
}
