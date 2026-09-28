/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables Static HTML Export for GitHub Pages
  output: 'export',
  
  // Ensures all routes have a trailing slash for GitHub Pages compatibility
  trailingSlash: true,
  
  images: {
    unoptimized: true, // Required for static export without a custom image loader
  },
}

module.exports = nextConfig
