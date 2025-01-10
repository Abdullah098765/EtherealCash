import BlogList from "@/components/BlogList/BlogList";
import BlogPagination from "@/components/BlogPagination/BlogPagination";
import LayoutBlog from "@/layouts/LayoutBlog";
import Head from "next/head";
import { createClient } from "next-sanity";
import { useEffect } from "react";

export default function Home() {
  const client = createClient({
    projectId: "tjsokre9",
    dataset: "production",
    apiVersion: "v2022-03-07", // Use current date for API version
    useCdn: true, // Set to false if you want live updates
  });

  const fetchBlogs = async () => {
    console.log("first")
    const res = await client.fetch(`
    *[_type == "blog"] {
      title, slug, author, mainImage, publishedAt, categories, body
    }
  `);
    console.log(res, ">>>>>>>>>>>>>>>>>>>");
    debugger
    return res;
  };
  useEffect(() => {
    fetchBlogs()
  }, []);

  return (
    <>
      <Head>
        <title>
          EtherealCash - Revolutionizing Crypto with AI Trading for Traders
        </title>
        <meta
          name="description"
          content="EtherealCash is the exclusive cryptocurrency for the Signal Vase platform, integrating Artificial Intelligence for advanced trading strategies. Empower traders and investors to engage securely, pay for signals, and build a trusted community."
        />
      </Head>

      <LayoutBlog pageTitle={"Blog & Article"} item={"Blog"}>
        <BlogList />

        <BlogPagination />
      </LayoutBlog>
    </>
  );
}
