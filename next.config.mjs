/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["react.ey-office.net", "localhost:3030"]
    }
  }
};

export default nextConfig;
