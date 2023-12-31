/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'links.papareact.com',
      'lh3.googleusercontent.com',
      'www.edigitalagency.com.au',
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
