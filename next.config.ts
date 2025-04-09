import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/(.*)',
        destination: 'https://fdev-docs-clone.vercel.app',
        permanent: true,
      },
    ]
  }
};


export default nextConfig;
