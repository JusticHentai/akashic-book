/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // scss 配置
  sassOptions: {
    additionalData: `@import "./global.scss";`,
  },
  crossOrigin: 'anonymous',
}

module.exports = nextConfig
