/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  // scss 配置
  sassOptions: {
    additionalData: `@import "./global.scss";`,
  },
  crossOrigin: 'anonymous',
}

module.exports = nextConfig
