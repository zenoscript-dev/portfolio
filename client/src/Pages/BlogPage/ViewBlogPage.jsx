import React from 'react'
import "./ViewBlogPage.css"
import PageWrapper from '../../Components/PageWrapper/PageWrapper'
import Navbar from '../../Components/Navbar/Navbar'

const ViewBlog = (data) => {
  return (
    <PageWrapper>
      <Navbar />
      <main className="view-blog-wrapper">
        <h1>{data.title}</h1>
        <div>{data.content}</div>
      </main>
    </PageWrapper>
  )
}

export default ViewBlog
