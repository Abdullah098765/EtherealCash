import React, { useEffect, useState } from "react";
import BlogCategories from "./BlogCategories";
import BlogPages from "./BlogPages";
import BlogRecents from "./BlogRecents";
import BlogSearch from "./BlogSearch";
import BlogTags from "./BlogTags";
import client from "@/pages/blog/sanityConfig";

const BlogAside = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (!query) return;

    setLoading(true);
console.log("query", query);

    try {
      // GROQ Query to search posts by title or content
      const results = await client.fetch(
        `*[_type == "post" && title match $query || body match $query]{
          _id,
          title,
          slug,
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
      {loading && <p>Loading...</p>}

      {/* Render Search Results */}
      <div className="search-results">
        {searchResults.map((post) => (
          <div key={post._id} className="search-result-item">
            <h4>{post.title}</h4>
            {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
            <a href={`/blog/${post.slug.current}`}>Read more</a>
          </div>
        ))}
      </div>
      {/* blog categories */}
      <BlogCategories />

      {/* blog pages */}
      <BlogPages />

      {/* blog recents */}
      <BlogRecents />

      {/* blog popular tags */}
      <BlogTags />
    </aside>
  );
};

export default BlogAside;
