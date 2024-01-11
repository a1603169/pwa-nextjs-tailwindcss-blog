/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_GA_ID: process.env.GA_TRACKING_ID,
  },
}

module.exports = nextConfig;