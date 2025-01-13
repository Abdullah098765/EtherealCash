import React, { useEffect, useState } from "react";
import BlogCategories from "./BlogCategories";
import BlogPages from "./BlogPages";
import BlogRecents from "./BlogRecents";
import BlogSearch from "./BlogSearch";
import BlogTags from "./BlogTags";
import client from "@/sanityConfig";
import SearchResults from "./SearchResults";

const BlogAside = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (query == "") {
      setSearchResults([]);
      return;
    }

    setLoading(true);

    try {
      // GROQ Query to search posts by title or content
      const results = await client.fetch(
        `*[_type == "blog" && title match $query || body match $query]{
          _id,
          title,
          slug,
          readingTime,
          "author": author->name,
           images[]{
          asset->{
            _id,
            url
          }
        },
          publishedAt,
          "imageUrl": mainImage.asset->url
        }`,
        { query: `${query}*` } // Perform wildcard search
      );
      console.log("results", results);

      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <aside className="blog-sidebar">
      {/* blog searching */}
      <BlogSearch onSearch={handleSearch} />
      {/* Loading State */}
      {loading && (
        <p className="text-center mx-auto" style={{ width: "fit-content" }}>
          Loading...
        </p>
      )}

      {/* Render Search Results in Row Layout */}
      <div className="container mt-4">
        <div className="row">
          {searchResults.map((blog) => (
            <SearchResults key={blog._id} blog={blog} />
          ))}
        </div>
      </div>

      {/* blog categories */}
      <BlogCategories />

      {/* blog pages */}
      {/* <BlogPages /> */}

      {/* blog recents */}
      <BlogRecents />

      {/* blog popular tags */}
      <BlogTags />
    </aside>
  );
};

export default BlogAside;
