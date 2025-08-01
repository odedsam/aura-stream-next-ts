import type { Metadata } from 'next';
import { Geist, Geist_Mono, Manrope } from 'next/font/google';

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});


export const appMetaData: Metadata = {
  title: 'AuraStream',
  description: 'Enjoy Streaming',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/apple-touch-icon.png', rel: 'apple-touch-icon', sizes: '180x180' },
    ],
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  applicationName: 'AuthStream',
  appleWebApp: {
    capable: true,
    title: 'My App',
    statusBarStyle: 'black-translucent',
  },
};
