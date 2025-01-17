import { createClient } from "next-sanity";
import BlogDetails from "@/components/BlogDetails/BlogDetails";
import LayoutBlog from "@/layouts/LayoutBlog";
import Head from "next/head";

// Sanity client initialization
const client = createClient({
  projectId: "tjsokre9",
  dataset: "production",
  apiVersion: "v2022-03-07", 
  useCdn: true, 
});

// Fetch blog data by slug
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
      images[] {
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

// Use getServerSideProps for dynamic fetching
export async function getServerSideProps({ params }) {
  console.log("Fetching blog data for slug:", params.slug);
  const blog = await fetchBlogBySlug(params.slug);
  console.log("Fetched blog data:", blog);

  if (!blog) {
    console.error("Blog not found!");
    return { notFound: true };
  }

  return { props: { blog } };
}

export default function Slug({ blog }) {
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <Head>
        <title>{blog.seoTitle || blog.title || "Blog Details"}</title>
        <meta name="description" content={blog.seoDescription || ""} />
        <meta property="og:title" content={blog.seoTitle || blog.title || "Blog Details"} />
        <meta property="og:description" content={blog.seoDescription || ""} />
        <meta property="og:image" content={blog?.images?.[0]?.asset?.url || "https://etherealcash.com/default-image.png"} />
      </Head>

      <LayoutBlog pageTitle={blog?.title || "Blog Details"} item={blog?.title || "BLOG DETAILS"}>
        <BlogDetails client={client} blog={blog} />
      </LayoutBlog>
    </>
  );
}
