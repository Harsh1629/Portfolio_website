/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname:'media.licdn.com',
        }
    ],
  },
  experimental:{
    serverActions: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};
module.exports = nextConfig;
