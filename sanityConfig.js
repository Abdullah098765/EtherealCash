import { createClient } from "next-sanity";

// Configure the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID, // Replace with your Sanity project ID
  dataset: process.env.NEXT_PUBLIC_DATASET, // Replace with your dataset
  apiVersion: "2022-03-07", // Use the specified API version
  useCdn: true, // Set to false if you want real-time updates
});

export default client;
