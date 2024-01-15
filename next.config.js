/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_GA_ID: process.env.GA_TRACKING_ID,
  },
  images: {
    domains: 'www.shinmei.co.jp/',
    protocol: 'https', 
    pathName: 'shinmei/'
  }
}

module.exports = nextConfig;