import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/(.*)',
        destination: 'https://yourdomain.com/:path*',
        permanent: true,
      },
    ]
  }
};


export default nextConfig;
