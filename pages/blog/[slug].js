import { createClient } from "next-sanity";
import BlogDetails from "@/components/BlogDetails/BlogDetails";
import LayoutBlog from "@/layouts/LayoutBlog";
import Head from "next/head";

// Initialize Sanity client
const client = createClient({
  projectId: "your-project-id",
  dataset: "your-dataset",
  useCdn: true,
});

// Fetch blog data based on slug
const fetchBlogBySlug = async (slug) => {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
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
  }`;
  const blog = await client.fetch(query, { slug });
  return blog;
};

export default function Slug({ blog, loading }) {
  if (loading) {
    return <div className="loading">Loading...</div>; // Replace with a loading spinner or skeleton
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <Head>
        <title>{blog.seoTitle || blog.title || "Blog Details"}</title>
        <meta name="description" content={blog.seoDescription || ""} />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={blog.seoTitle || blog.title || "Blog Details"}
        />
        <meta property="og:description" content={blog.seoDescription || ""} />
        <meta
          property="og:image"
          content={blog?.images?.[0]?.asset?.url || "https://etherealcash.com/default-image.png"}
        />
        <meta property="og:url" content={`https://etherealcash.com/blog/${blog.slug}`} />
        <meta property="og:type" content="article" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={blog.seoTitle || blog.title || "Blog Details"}
        />
        <meta name="twitter:description" content={blog.seoDescription || ""} />
        <meta
          name="twitter:image"
          content={blog?.images?.[0]?.asset?.url || "https://etherealcash.com/default-image.png"}
        />
      </Head>

      <LayoutBlog pageTitle={blog?.title || "Blog Details"} item={blog?.title || "BLOG DETAILS"}>
        <BlogDetails client={client} blog={blog} />
        {/* Additional blog content can go here */}
      </LayoutBlog>
    </>
  );
}

// Fetch blog data on each request
export async function getServerSideProps({ params }) {
  let blog = null;
  let loading = true;

  try {
    blog = await fetchBlogBySlug(params.slug);
    loading = false;

    if (!blog) {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
    loading = false;
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog,
      loading,
    },
  };
}
