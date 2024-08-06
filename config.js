export const config = {
  domainSource: "madeeasy.ai", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/blog/[^/]+",
          metaDataEndpoint: "https://api.madeeasy.ai/api:3DvLmlut/blogs/{id}/metadata"
      }
      // Add more patterns and their metadata endpoints as needed
  ]
};
