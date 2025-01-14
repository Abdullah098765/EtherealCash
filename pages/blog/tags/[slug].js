import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createClient } from "next-sanity";
import BlogPost from "../categories/BlogPost";
import LayoutBlog from "@/layouts/LayoutBlog";
import client from "@/sanityConfig";

const fetchPostsByTag = async (tag) => {
  const query = `*[_type == "blog" && "${tag}" in tags[]] {
     title,
      "slug": slug.current,
      body,
      "authorName": author->name,
      "authorImage": author->image.asset->url,
      publishedAt,
      excerpt,
      tags,
      images[] {
        asset->{
          _id,
          url
        }
      },
      readingTime
  }`;

  const posts = await client.fetch(query);
  return posts;
};

const TagPage = () => {
  const [posts, setPosts] = useState([]);
  const [tag, setTag] = useState();
  const router = useRouter();
  useEffect(() => {
    const pathname = window.location.pathname;
    const tag = decodeURIComponent(pathname.split("/").pop());

    if (tag) {
      setTag(tag);
      fetchPostsByTag(tag).then((fetchedPosts) => {
        setPosts(fetchedPosts);
      });
    }
  }, [router]);

  return (
    <LayoutBlog>
      <h1>Posts related to: {tag}</h1>
      {posts.length === 0 ? (
        <p>No posts found for this tag.</p>
      ) : (
        posts.map((blog, index) => <BlogPost key={index} blog={blog} />)
      )}
    </LayoutBlog>
  );
};

export default TagPage;
