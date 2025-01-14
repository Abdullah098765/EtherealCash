import BlogList from "@/components/BlogList/BlogList";
import BlogPagination from "@/components/BlogPagination/BlogPagination";
import LayoutBlog from "@/layouts/LayoutBlog";
import Head from "next/head";
import { createClient } from "next-sanity";
import { useEffect, useState } from "react";
import client from "../../sanityConfig";

export default function Home() {
  const [blog_list, setblog_list] = useState([]);

  const fetchBlogs = async () => {
    console.log("first");
    const res = await client.fetch(`
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
        images[]{
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
    console.log(res, ">>>>>>>>>>>>>>>>>>>");
    setblog_list(res);

    return res;
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

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
        {/* <BlogPagination /> */}
      </LayoutBlog>
    </>
  );
}
