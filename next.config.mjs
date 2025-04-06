/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Replace 'portfolio' with your repository name if different
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-2/' : '',
  // Keep any experimental features you need
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

export default nextConfig