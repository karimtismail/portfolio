/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = '/karimtimsail'
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: assetPrefix,
    basePath: basePath,
};

module.exports = nextConfig;