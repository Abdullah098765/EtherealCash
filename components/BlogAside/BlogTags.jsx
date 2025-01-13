import React, { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "next-sanity";
import client from "@/sanityConfig";


const fetchTags = async () => {
  const query = `*[_type == "blog" && defined(tags)]{
    tags
  }`;

  const result = await client.fetch(query);

  // Flatten the tags array and remove duplicates
  const allTags = result.flatMap((post) => post.tags).filter(Boolean);
  const uniqueTags = [...new Set(allTags)]; // Get unique tags

  return uniqueTags;
};

const BlogTags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchTags().then((fetchedTags) => {
      setTags(fetchedTags);
    });
  }, []);

  return (
    <div className="blog-widget">
      <h2 className="bw-title">Popular Tags</h2>
      <div className="tag-list">
        <ul>
          {tags.length === 0 ? (
            <li>No tags available</li>
          ) : (
            tags.map((tag, index) => (
              <li key={index}>
                <Link href={`/blog/tags/${tag}`}>{tag}</Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default BlogTags;
