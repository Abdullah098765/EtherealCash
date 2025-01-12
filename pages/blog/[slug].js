import { useEffect, useState } from "react";
import BlogCommentForm from "@/components/BlogDetails/BlogCommentForm";
import BlogComments from "@/components/BlogDetails/BlogComments";
import BlogDetails from "@/components/BlogDetails/BlogDetails";
import LayoutBlog from "@/layouts/LayoutBlog";
import Head from "next/head";
import { createClient } from "next-sanity";
const client = createClient({
  projectId: "tjsokre9",
  dataset: "production",
  apiVersion: "v2022-03-07", // Use current date for API version
  useCdn: true, // Set to false if you want live updates
});

const fetchBlogBySlug = async (slug) => {
  const query = `
    *[_type == "blog" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      body,
      "authorName": author->name,
      "authorImage": author->image.asset->url,
      publishedAt,
      excerpt,
      tags,
      images[]{
        asset->{
          _id,
          url
        }
      },
      seoTitle,
      seoDescription,
      readingTime
    }
  `;
  const blog = await client.fetch(query, { slug });
  return blog;
};

export default function Slug() {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [slug, setSlug] = useState(null);

  useEffect(() => {
    // Accessing the slug directly from the URL path
    const pathname = window.location.pathname;
    const pathSlug = pathname.split("/").pop(); // Get the slug from URL

    setSlug(pathSlug); // Set the slug state

    if (pathSlug) {
      setLoading(true);
      fetchBlogBySlug(pathSlug)
        .then((data) => {
          setBlog(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching blog:", error);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <Head>
        <title>{blog.seoTitle || blog.title || "Blog Details"}</title>
        <meta name="description" content={blog.seoDescription || ""} />
      </Head>

      <LayoutBlog pageTitle={blog?.title || "Blog Details"} item={blog?.title || "BLOG DETAILS"}>
      <BlogDetails client={client} blog={blog} />
        {/* <BlogComments comments={[]} /> */}
        {/* <BlogCommentForm blogId={blog._id} /> */}
      </LayoutBlog>
    </>
  );
}
