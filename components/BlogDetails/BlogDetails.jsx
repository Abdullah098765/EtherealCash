import React from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import SocialShare from "./SocialShare";

const BlogDetails = ({ blog, client }) => {
  const urlFor = (source) => imageUrlBuilder(client).image(source);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="blog-post-item blog-details-wrap">
        {/* Blog Title */}
        <h1 className="title text-text-black mb-5" style={{ color: "#000" }}>
          {blog.title}
        </h1>
        <div className="blog-meta">
          <ul>
            <li>
              <a href="#">
                <img
                  src={blog.authorImage}
                  alt={blog.authorName}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />
                {blog.authorName}
              </a>
            </li>
            <li>
              <i className="far fa-clock"></i>
              {new Date(blog.publishedAt).toLocaleDateString()}
            </li>
            <li>
              {/* Placeholder for comments count */}
              <i className="fas fa-book-reader"></i>
              {blog.readingTime
                ? `${blog.readingTime} min read`
                : "Reading time not available"}
            </li>
          </ul>
        </div>
      
      {/* Blog Thumbnail */}

      <div className="blog-post-thumb ">
        <img
          src={blog?.images?.[0]?.asset?.url || "/img/blog/default_img.jpg"}
          alt={blog.title}
        />
      </div>

      {/* Blog Content */}
      <div className="blog-post-content">
        {/* Blog Metadata */}
       
        {/* Blog Body */}
        <div className="blog-body">
          <PortableText
            value={blog.body}
            components={{
              types: {
                image: ({ value }) => {
                  if (!value.asset?._ref) return null;

                  return (
                    <img
                      src={urlFor(value.asset).url()}
                      alt="Blog content image"
                      style={{ maxWidth: "100%", margin: "20px 0" }}
                    />
                  );
                },
              },

              marks: {
                link: ({ children, value }) => (
                  <a
                    href={
                      value.href?.startsWith("http://") ||
                      value.href?.startsWith("https://")
                        ? value.href
                        : `http://${value.href}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              },

              block: {
                h1: ({ children }) => (
                  <h1 style={{ color: "black" }}>{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 style={{ color: "black" }}>{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 style={{ color: "black" }}>{children}</h3>
                ),
                h4: ({ children }) => (
                  <h3 style={{ color: "black" }}>{children}</h3>
                ),
                h5: ({ children }) => (
                  <h3 style={{ color: "black" }}>{children}</h3>
                ),
                // Add more heading styles as needed
              },
            }}
          />
        </div>

        {/* Tags */}
        {blog.tags && (
          <div className="blog-details-tags">
            <ul>
              <li className="tag-title">Tags</li>
              {blog.tags.map((tag, index) => (
                <li key={index}>
                  <Link href={`/tags/${tag}`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Social Share */}
        <SocialShare
          title="Check out this amazing blog!"
          image="blog?.images?.[0]?.asset?.url"
        />
      </div>
    </div>
  );
};

export default BlogDetails;
