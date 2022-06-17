/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env:{
    JWT_SECRET: process.env.JWT_SECRET,
    VERCEL_URL: process.env.VERCEL_URL,
  }
}

module.exports = nextConfig
