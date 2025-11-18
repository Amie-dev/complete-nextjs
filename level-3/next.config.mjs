/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        hostname: "unsplash.com",
        // pathname: "/images/**" // optional, if you want to restrict paths
      },{
        hostname:"google.com"
      }
    ],
  },
};

export default nextConfig;
