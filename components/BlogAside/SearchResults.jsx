import React from "react";
import Link from "next/link"; // If you're using Next.js, otherwise use 'a' tag for regular links

export default function SearchResults({ blog }) {
  if (!blog) return;

  return (
    <div key={blog._id} className="rc-post-item">
      {/* Image */}
      <div className="rc-post-thumb">
        <Link href={`/blog/${blog.slug?.current}`}>
          <img
            src={blog.images?.[0]?.asset?.url || "/img/blog/default_img.jpg"}
            alt={blog.title}
            className="img-fluid"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="rc-post-content">
        <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>

        <h4 className="title">
          <Link href={`/blog/${blog.slug?.current}`}>{blog.title}</Link>
        </h4>
      </div>
    </div>
  );
}
