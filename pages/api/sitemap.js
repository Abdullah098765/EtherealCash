import client from "@/sanityConfig";

export default async function handler(req, res) {
  const baseUrl = "https://www.etherealcash.com";
  let blogPosts = [];

  try {
    const query = `*[_type == "blog"]{slug, _updatedAt}`;
    blogPosts = await client.fetch(query);
    console.log("Fetched blog posts:", blogPosts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }

  const staticPages = [
    { loc: "/", priority: 1 },
    { loc: "/whitepaper", priority: 0.8 },
    { loc: "/pitchdeck", priority: 0.8 },
    { loc: "/privacy", priority: 0.8 },
    { loc: "/faq", priority: 0.8 },
    { loc: "/terms", priority: 0.8 },
  ];

  // Fetch dynamic blog posts from Sanity

  const urls = [
    ...staticPages.map((page) => ({
      loc: `${baseUrl}${page.loc}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: page.priority,
    })),
    ...blogPosts.map((post) => ({
      loc: `${baseUrl}/blog/${post.slug.current}`,
      lastmod: post._updatedAt
        ? new Date(post._updatedAt).toISOString()
        : new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.8,
    })),
  ];

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${url.loc}</loc>
        <lastmod>${url.lastmod}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  // Set the correct Content-Type
  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}
