/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === "development",
})

const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_GA_ID: process.env.GA_TRACKING_ID,
  },
}

module.exports = withPWA(nextConfig);