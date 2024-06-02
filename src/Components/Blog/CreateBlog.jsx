import React from "react";
import "./CreateBlog.css";
import PageWrapper from "../PageWrapper/PageWrapper";

const CreateBlog = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        for (let [name, value] of formData.entries()) {
            console.log(`${name}: ${value}`);
        }
    }

  return (
    <PageWrapper>
      <main className="create-blog-wrapper">
        <h1 className="txt-light">Create a new Blog Post</h1>
        <form action="" name="create-blog" className="create-blog-form" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" autoFocus />
            </div>
            <div className="field">
                <label htmlFor="content">Content</label>
                <textarea type="text" id="content" name="content"/>
            </div>
            <div className="field">
                <label htmlFor="poster">Upload Poster</label>
                <input type="file" id="poster" name="poster"/>
            </div>
            <button type="submit" className="btn-outlined">Create Blog</button>
        </form>
      </main>
    </PageWrapper>
  );
};

export default CreateBlog;
