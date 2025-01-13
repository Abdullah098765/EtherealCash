import React, { useEffect, useState } from "react";
import BlogRecentItem from "./BlogRecentItem";
import { createClient } from "next-sanity";
import client from "@/sanityConfig";

const fetchRecentPosts = async () => {
  const query = `*[_type == "blog"] | order(publishedAt desc)[0...4] { 
    title,
    "slug": slug.current,
    publishedAt,
     images[]{
          asset->{
            _id,
            url
          }
        },
  }`;

  const recentPosts = await client.fetch(query);
  return recentPosts;
};

const BlogRecents = () => {
  const [recentItems, setRecentItems] = useState([]);

  useEffect(() => {
    // Fetch the recent posts
    fetchRecentPosts().then((posts) => {
      setRecentItems(posts);
    });
  }, []);

  return (
    <div className="blog-widget">
      <h2 className="bw-title">Recent Post</h2>
      <div className="rc-post-wrap">
        {recentItems.map((item, index) => (
          <BlogRecentItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogRecents;
