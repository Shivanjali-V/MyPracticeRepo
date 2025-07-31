import React from "react";

function BlogDetails(props) {
  const blogs = props.blogs;

  return (
    <div style={{ padding: "10px" }}>
      <h2>Blog Details</h2>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h3>{blog.title}</h3>
          <b>{blog.author}</b>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
