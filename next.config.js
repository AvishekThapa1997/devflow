/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    mdxRs: true,
    serverComponentsExternalPackages: ['mongoose'],
  },
  output: 'export',
};

module.exports = nextConfig;
