/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    baseURL: process.env.API
  },
  eslint: {
    dirs: ['src']
  },
  typescript: { ignoreBuildErrors: true },

  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
