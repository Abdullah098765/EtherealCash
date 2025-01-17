import { createClient } from "next-sanity";

// Configure the Sanity client
const client = createClient({
  projectId:  "tjsokre9", // Replace with your Sanity project ID
  dataset:  "production", // Replace with your dataset
  apiVersion: "2022-03-07", // Use the specified API version
  useCdn: false, // Set to false if you want real-time updates
});

export default client;
