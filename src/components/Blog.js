import React from "react";
import data from "../data/blogData";

const Blog = ({ data }) => {
  return (
    <div className="blog-container">
      <img
        src={data.image}
        alt="Blog Cover"
        className="blog-cover-image"
        style={{ height: "200px", width: "auto", float: "left", marginRight: "20px" }}
      />
      <div className="blog-content">
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>

        {data.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))} 
      </div>
    </div>
  );
};



export default Blog;