import React, { useState } from "react";
import "./CreateBlogPage.css";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateBlog = () => {
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (let [name, value] of formData.entries()) {
      console.log(`${name}: ${value}`);
    }
  };

  console.log(value);

  return (
    <PageWrapper>
      <main className="create-blog-wrapper">
        <h1 className="txt-light">Create a new Blog Post</h1>
        <form
          action=""
          name="create-blog"
          className="create-blog-form"
          onSubmit={handleSubmit}
        >
          <div className="field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" autoFocus />
          </div>
          <div className="field">
            <label htmlFor="content">Content</label>
            <ReactQuill
              theme="snow"
              modules={{
                toolbar: {
                  container: [
                    [{ header: "1" }, { header: "2" }, { font: [] }],
                    [{ size: [] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                      { list: "ordered" },
                      { list: "bullet" },
                      { indent: "-1" },
                      { indent: "+1" },
                    ],
                    ["link", "image", "video"],
                    ["code-block"],
                    ["clean"],
                  ],
                },
                clipboard: {
                  matchVisual: false,
                },
              }}
              formats={[
                "header",
                "font",
                "size",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "bullet",
                "indent",
                "link",
                "image",
                "video",
                "code-block",
              ]}
              value={value}
              onChange={setValue}
              id="content"
            />
          </div>
          <div className="field">
            <label htmlFor="poster">Upload Poster</label>
            <input type="file" id="poster" name="poster" />
          </div>
          <button type="submit" className="btn-outlined">
            Create Blog
          </button>
        </form>
      </main>
    </PageWrapper>
  );
};

export default CreateBlog;
