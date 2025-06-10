import './globals.css';
import { Toaster } from '@/app/components/ui/toaster';
import { Viewport } from 'next';
import { appMetaData, geistSans, geistMono, manrope } from '@/config/appConfig';
import StreamLoaderWrapper from './StreamLoader';
import AppHeader from './layouts/AppHeader';
import AppFooter from './layouts/AppFooter';

export const metadata = appMetaData;
export const viewport: Viewport = {
  themeColor: '#141414',
};

export type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;


export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${manrope.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}>
        <AppHeader />
        <StreamLoaderWrapper>
          <main className="flex-grow bg-primary">{children}</main>
        </StreamLoaderWrapper>
        <AppFooter />
        <Toaster />
      </body>
    </html>
  );
}
