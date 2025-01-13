import React from "react";
import Link from "next/link";

const BlogRecentItem = ({ item }) => {
  return (
    <div className="rc-post-item">
      <div className="rc-post-thumb">
        <Link href={`/blog/${item.slug}`}>
          <img src={item.images[0]?.asset?.url} alt={item.title} />
        </Link>
      </div>

      <div className="rc-post-content">
        <span>{new Date(item.publishedAt).toLocaleDateString()}</span>

        <h4 className="title">
          <Link href={`/blog/${item.slug}`}>{item.title}</Link>
        </h4>
      </div>
    </div>
  );
};

export default BlogRecentItem;
