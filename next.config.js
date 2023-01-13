/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

let config = {
  images: {
    unoptimized: true,
  },
}

if (process.env.GITHUB_REPOSITORY) {
  const repositoryName = process.env.GITHUB_REPOSITORY.split('/')[1]

  config = {
    ...config,
    assetPrefix: `/${repositoryName}/`,
    basePath: `/${repositoryName}`,
  }
}

module.exports = withNextra(config)
