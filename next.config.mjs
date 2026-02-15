/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Cloudflare Workers の Static Export では利用不可能
  },
};

export default nextConfig;
