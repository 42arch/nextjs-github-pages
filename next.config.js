/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

module.exports = withNextra({
  /**
   * Tell Next.js where the `public` folder is.
   * Replace `nextjs-github-pages` with your Github repo project name.
   */
  assetPrefix: isProd ? '/nextjs-github-pages/' : '',
  /**
   * Disable server-based image optimization.
   *
   * @see https://nextjs.org/blog/next-12-3#disable-image-optimization-stable
   */
  images: {
    unoptimized: true,
  },
})
