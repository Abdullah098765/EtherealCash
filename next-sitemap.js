// next-sitemap.js

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://etherealcash.com', // Replace with your website URL
    generateRobotsTxt: true, // Optional: This generates a robots.txt file
    changefreq: 'daily', // Optional: Set the frequency of page updates
    priority: 0.7, // Optional: Set the priority of the pages
    sitemapSize: 7000, // Optional: Define the maximum number of URLs per sitemap file
  }
  