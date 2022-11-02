/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  env:{
    baseURL: process.env.API
  },

  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
