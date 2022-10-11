/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.PATH_PREFIX ?? '/',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
