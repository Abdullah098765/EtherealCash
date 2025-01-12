import React, { useEffect, useState } from "react";
import BlogListItem from "./BlogListItem";
import { createClient } from "next-sanity";

const BlogList = ({blog_list}) => {

  return (
    <>
      {blog_list.map((blog, index) => (
        <BlogListItem key={index} item={blog} />
      ))}
    </>
  );
};

export default BlogList;
