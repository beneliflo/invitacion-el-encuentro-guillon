/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  images: { 
    unoptimized: true
  },
  assetPrefix: isProd ? '' : undefined,
}
 
module.exports = nextConfig