/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel will handle all the deployment specific settings
  // using their built-in Next.js detection
  images: {
    remotePatterns: [],
    unoptimized: true,  // This enables static exports of images
    domains: ['localhost', 'tonikiku-landing-page-rnj9o3f9y-joshua-underwoods-projects.vercel.app'],
  },
  productionBrowserSourceMaps: false,
  // Add explicit output configuration for Vercel
  output: 'standalone',
  // Make sure asset prefix is correctly set for Vercel
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined,
};

module.exports = nextConfig; 