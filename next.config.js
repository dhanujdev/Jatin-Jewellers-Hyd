/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
    ],
  },
  // Fix Same.dev deployment paths
  basePath: '',
  trailingSlash: true,
};

module.exports = nextConfig;
