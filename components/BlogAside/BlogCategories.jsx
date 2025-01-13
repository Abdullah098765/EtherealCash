import React, { useState, useEffect } from "react";
import Link from "next/link";
import client from "@/sanityConfig";

const BlogCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch categories from Sanity
        const data = await client.fetch(
          `*[_type == "category"]{
            _id,
            title,
            "slug": slug.current,
            count
          }`
        );
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="blog-widget">
      <h2 className="bw-title">Categories</h2>
      <div className="category-list">
        {loading ? (
          <p>Loading categories...</p>
        ) : (
          <ul>
            {categories.map((category) => (
              <li key={category._id}>
                <Link href={`/blog/categories/${category.slug}`}>
                  {category.title} <span>{category.count || 0}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BlogCategories;
