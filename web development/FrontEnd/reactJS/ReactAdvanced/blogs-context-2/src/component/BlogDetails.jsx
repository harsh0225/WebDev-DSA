import React from 'react'
import { NavLink } from 'react-router-dom'

export const BlogDetails = ({post}) => {
  return (
    <div className='mt-[50px]'>
        <NavLink to={`/blog/${post.id}`}>
            <span>{post.title}</span>
        </NavLink>
        <p>
            By <span>{post.author}</span> on {" "} 
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span>{post.category}</span>
            </NavLink>
        </p>

        <p>
            posted on {post.data}
        </p>
        
        <p>
            {post.content}
        </p>
        <p>
            {
                post.tags.map((tag,index) => {
                    return(
                        <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                            <span># {tag}</span>
                        </NavLink>
                    )
                })
            }
        </p>
    </div>
  )
}
