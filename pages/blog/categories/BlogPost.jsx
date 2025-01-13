import React from 'react'

export default function BlogPost({blog}) {
  if (!blog) return
  return (
    <a
    key={blog.slug}
    href={`/blog/${blog.slug}`}
    className="projcard projcard-blue text-decoration-none text-dark"
  >
    <div className="projcard-innerbox">
      {blog.images?.[0]?.asset?.url && (
        <img
          className="projcard-img"
          src={blog.images[0].asset.url}
          alt={blog.title}
        />
      )}
      <div className="projcard-textbox">
        <div className="projcard-title">{blog.title}</div>
        <div className="projcard-subtitle">
          Published by {blog.authorName} on{" "}
          {new Date(blog.publishedAt).toLocaleDateString()}
        </div>
        <div className="projcard-bar"></div>
        <div className="projcard-description">
          {blog.excerpt?.slice(0, 80) + "..."}
        </div>
        <div className="projcard-tagbox">
        <span className="small">Tags:</span> {/* Using Bootstrap's 'small' class */}
        {blog.tags?.map((tag, index) => (
            <span key={index} className="projcard-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </a>
  )
}
