import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/', // Root path
        destination: '/home', // Redirect to /home
        permanent: false, // Use temporary redirect (status code 307)
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.pokemondb.net',
        pathname: '/**', // Allow all paths under this domain
      },
    ],
  },
};

export default nextConfig;
