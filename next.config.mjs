/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://manoj.usearticle.com", // Proxy the /blog route
      },
      {
        source: "/blog/:slug*",
        destination: "https://manoj.usearticle.com/:slug*", // Proxy the /blog/slug routes
      },
    ];
  },
};

console.log("Next config loaded");

export default nextConfig;
