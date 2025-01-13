import React, { useEffect, useState } from "react";

const BlogSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); // Notify the parent with the search query
    console.log(query);
  };
  useEffect(() => {
    onSearch(query);
  }, [query]);

  return (
    <div className="blog-widget">
      <h2 className="bw-title">Search Here</h2>
      <form className="sidebar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search post"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update local state
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default BlogSearch;
