/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DEMO_MODE: process.env.DEMO_MODE || "1",
    NEXT_PUBLIC_DEMO_MODE: process.env.NEXT_PUBLIC_DEMO_MODE || "1",
    DATABASE_URL:
      process.env.DATABASE_URL || "postgresql://demo:demo@localhost:5432/sable",
    DIRECT_URL:
      process.env.DIRECT_URL || "postgresql://demo:demo@localhost:5432/sable",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;
