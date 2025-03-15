/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
    ],
  },
  // Indicate the output directory to Same.dev
  distDir: 'build',
  // Fix Same.dev deployment paths
  basePath: '',
  trailingSlash: true,
};

module.exports = nextConfig;
