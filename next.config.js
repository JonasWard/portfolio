// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'https://jonasward.github.io/portfolio/' : '',
  images: {
    unoptimized: true,
  },
}