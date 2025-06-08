import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**',
      },
    ],
  },
  serverExternalPackages: ['fs', 'path'],

  experimental: {},
  compress: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  ...(process.env.NODE_ENV === 'production' && {
    poweredByHeader: false,
    generateEtags: false,
  }),
};

export default nextConfig;
