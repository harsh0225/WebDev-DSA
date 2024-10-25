import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { Spinner } from './Spinner';
import { BlogDetails } from './BlogDetails';


export default function Blogs(){

    //consume
    const {loading,post} = useContext(AppContext);


   

  return (
    <div className="flex flex-col gap-y-10 my-4">
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">Loading</p>
        </div>
      ) : post.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : (
        post.map((post) => (
          <BlogDetails key={post.id} post={post}/>
        ))
      )}
    </div>
  )
}