import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Viewport } from 'next';
import { appMetaData, geistSans, geistMono, manrope } from '@/config/appConfig';
import AppLoaderWrapper from './AppLoaderWrapper';
import AppHeader from './layouts/AppHeader';
import AppFooter from './layouts/AppFooter';

export const metadata = appMetaData;
export const viewport: Viewport = { themeColor: '#141414' };
export type LayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${manrope.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}>
        <AppHeader />
        <AppLoaderWrapper>
          <main className="flex-grow bg-primary">{children}</main>
        </AppLoaderWrapper>
        <AppFooter />
        <Toaster />
      </body>
    </html>
  );
}
