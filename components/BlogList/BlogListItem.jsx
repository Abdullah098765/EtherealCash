import Link from "next/link";
import React from "react";

const BlogListItem = (props) => {
  const {
    slug,
    title,
    excerpt,
    author,
    publishedAt,
    categories,
    readingTime,
    authorImage,
  } = props.item;

  return (
    <div className="blog-post-item">
      {/* Thumbnail Section */}
      <div className="blog-post-thumb">
        <Link href={`/blog/${slug}`}>
          {/* Optional: Replace with actual image URL when available */}
          <img
            src={props.item.images?.[0]?.asset?.url || "/default-thumbnail.jpg"}
            alt={title || "Blog Thumbnail"}
          />
        </Link>
      </div>

      {/* Content Section */}
      <div className="blog-post-content">
        {/* Meta Information */}
        <div className="blog-meta">
          <ul>
            {/* Author */}
            <li>
              <Link href={`/blog/${slug}`}>
                {authorImage ? (
                  <img
                    src={authorImage}
                    alt={author || "Author"}
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginRight: "8px",
                    }}
                  />
                ) : (
                  <i className="far fa-user"></i>
                )}{" "}
                {author || "Unknown Author"}
              </Link>
            </li>
            {/* Published Date */}
            <li>
              <i className="far fa-clock"></i>
              {new Date(publishedAt).toLocaleDateString() || "Unknown Date"}
            </li>
            {/* Reading Time */}
            <li>
              <i className="fas fa-book-reader"></i>
              {readingTime
                ? `${readingTime} min read`
                : "Reading time not available"}
            </li>
          </ul>
        </div>

        {/* Title */}
        <h2 className="title">
          <Link href={`/blog/${slug}`}>
            {title || "Untitled Blog Post"}
          </Link>
        </h2>

        {/* Excerpt */}
        <p>{excerpt || "No summary available for this article."}</p>

        {/* Categories */}
        {/* {categories?.length > 0 && (
          <div className="blog-categories">
            {categories.map((category, index) => (
              <span key={index} className="category-tag">
                {category}
              </span>
            ))}
          </div>
        )} */}

        {/* Read More Button */}
        <Link href={`/blog/${slug}`} className="btn btn-two">
          Read more <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default BlogListItem;

