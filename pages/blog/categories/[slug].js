import { useEffect, useState } from "react";
import LayoutBlog from "@/layouts/LayoutBlog";
import Head from "next/head";
import BlogPost from "./BlogPost.jsx";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "tjsokre9",
  dataset: "production",
  apiVersion: "v2022-03-07", // Use current date for API version
  useCdn: true, // Set to false if you want live updates
});

// Fetch blogs for a specific category
const fetchBlogsByCategory = async (categorySlug) => {
  const query = `
    *[_type == "blog" && $categorySlug in categories[]->slug.current] {
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
    }
  `;
  return client.fetch(query, { categorySlug });
};

export default function CategoryPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categorySlug, setCategorySlug] = useState(null);

  useEffect(() => {
    const pathname = window.location.pathname;
    const pathSlug = pathname.split("/").pop();

    setCategorySlug(pathSlug);

    if (pathSlug) {
      setLoading(true);
      fetchBlogsByCategory(pathSlug)
        .then((data) => {
          setBlogs(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching blogs by category:", error);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <LayoutBlog>
        <div className="container py-5">
          <h1 className="text-center">No blogs found for "{categorySlug}"</h1>
        </div>
      </LayoutBlog>
    );
  }

  return (
    <>
      <Head>
        <title>
          {categorySlug ? `${categorySlug} Blogs` : "Category"} - Blog
        </title>
      </Head>

      <LayoutBlog>
        <div className="container py-4">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {categorySlug}
              </li>
            </ol>
          </nav>

          {/* Category Title */}
          <h1 className="mb-4 text-capitalize">{categorySlug} Blogs</h1>

          {/* Blogs in the Category */}
          <div className="projcard-container">
            {blogs.map((blog) => (
              <BlogPost blog={blog} />
            ))}
          </div>
        </div>
      </LayoutBlog>
    </>
  );
}
