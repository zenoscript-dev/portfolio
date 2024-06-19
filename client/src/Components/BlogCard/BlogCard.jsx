import React from 'react';
import "./BlogCard.css"

const BlogCard = ({img, text, time}) => {
  return (
    <div className='blog-card'>
      <img src={img} alt="blog-image" />
      <h3 className='txt-light'>{text}</h3>
      <h4>sept 14,2024</h4>
    </div>
  )
}

export default BlogCard
