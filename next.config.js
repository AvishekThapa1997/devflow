/** @type {import('next').NextConfig} */
const nextConfig = {
  runtime: 'experimental-edge',
  experimental: {
    serverActions: true,
    mdxRs: true,
    serverComponentsExternalPackages: ['mongoose'],
  },
};

module.exports = nextConfig;
