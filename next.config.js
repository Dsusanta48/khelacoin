/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  // ⚠ নিচের লাইনটা থাকলে মুছে ফেলো
  // experimental: {
  //   serverActions: true
  // }
}

module.exports = nextConfig
