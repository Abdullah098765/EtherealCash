import BlogList from "@/components/BlogList/BlogList";
import LayoutBlog from "@/layouts/LayoutBlog";
import Head from "next/head";
import client from "../../sanityConfig";

export async function getStaticProps() {
  // Fetch blog data during the build process
  const blog_list = await client.fetch(`
    *[_type == "blog"] {
      title,
      "slug": slug.current,
      "author": author->name,
      "authorImage": author->image.asset->url,
      mainImage,
      publishedAt,
      categories,
      body,
      excerpt,
      tags,
      images[] {
        asset->{
          _id,
          url
        }
      },
      readingTime,
      status,
      seoTitle,
      seoDescription
    }
  `);

  return {
    props: {
      blog_list,
    },
    // Revalidate the page every 10 seconds for fresh data in production
    revalidate: 10,
  };
}

export default function Home({ blog_list }) {
  return (
    <>
      <Head>
        <title>
          EtherealCash Blog - Insights on Crypto, AI Trading, and Blockchain Trends
        </title>
        <meta
          name="description"
          content="Explore the EtherealCash Blog for the latest insights on cryptocurrency, AI-driven trading strategies, blockchain technology, and expert tips to empower traders and investors in the crypto space."
        />
      </Head>

      <LayoutBlog
        blog_list={blog_list}
        pageTitle={"Signal Vase Newsroom"}
        item={""}
      >
        <BlogList blog_list={blog_list} />
      </LayoutBlog>
    </>
  );
}
