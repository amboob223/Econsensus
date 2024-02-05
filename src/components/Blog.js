import React from "react";


const Blog = ({ data }) => {
  // Check if 'data' is defined
  if (!data) {
    return <p>Loading...</p>; // or any other placeholder content or loading indicator
  }

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
        <p>{data.content}</p>
        

        {/* Additional content rendering goes here */}
      </div>
    </div>
  );
};

export default Blog
