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
  headers: async () => [
    {
      source: '/api/search',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, s-maxage=300, stale-while-revalidate=600',
        },
      ],
    },
    {
      source: '/api/shows/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, s-maxage=600, stale-while-revalidate=1200',
        },
      ],
    },
    {
      source: '/api/episodes/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, s-maxage=600, stale-while-revalidate=1200',
        },
      ],
    },
  ],
  ...(process.env.NODE_ENV === 'production' && {
    poweredByHeader: false,
    generateEtags: false,
  }),
};

export default nextConfig;
