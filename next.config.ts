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
    domains: ["img.pokemondb.net"],
  },
};

export default nextConfig;
