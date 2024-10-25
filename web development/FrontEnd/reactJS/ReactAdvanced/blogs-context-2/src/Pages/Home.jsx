import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Blogs from '../component/Blogs'

export default function Home(){
  return (
    <div>
        <Header/>
        <div>
            <Blogs/> 
            <Footer/>
        </div>
    </div>
  )
}
