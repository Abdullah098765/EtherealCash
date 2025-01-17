import { createClient } from "next-sanity";
import BlogDetails from "@/components/BlogDetails/BlogDetails";
import LayoutBlog from "@/layouts/LayoutBlog";
import Head from "next/head";

const client = createClient({
  projectId: "tjsokre9",
  dataset: "production",
  apiVersion: "v2022-03-07",
  useCdn: true,
});

// Fetch all blog slugs for static generation
export async function getStaticPaths() {
  const query = `
    *[_type == "blog"] {
      "slug": slug.current
    }
  `;
  const blogs = await client.fetch(query);
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return { paths, fallback: "blocking" };
}

// Fetch blog data for each slug
export async function getStaticProps({ params }) {
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
  const blog = await client.fetch(query, { slug: params.slug });

  if (!blog) {
    return { notFound: true };
  }

  return {
    props: { blog },
    revalidate: 60, // Revalidate the page every 60 seconds
  };
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
