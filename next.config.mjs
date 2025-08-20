import { NextConfig } from 'next';

// Define the Next.js configuration
const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React strict mode
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  experimental: {
    appDir: true, // Enable experimental app directory
  },
  webpack: (config) => {
    // Custom webpack configuration can go here
    return config;
  },
};

export default nextConfig;