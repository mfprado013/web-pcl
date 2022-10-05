/** @type {import('next').NextConfig} */
const nextConfig = {

  env:{
    baseURL: process.env.API
  },

  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
