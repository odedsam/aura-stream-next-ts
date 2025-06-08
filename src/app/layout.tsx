import './globals.css';
import { Toaster } from '@/app/components/ui/toaster';
import { appMetaData, geistSans, geistMono, manrope } from '@/config/appConfig';
import AppHeader from './layouts/AppHeader';
import AppFooter from './layouts/AppFooter';
import StreamLoaderWrapper from './StreamLoader';

export const metadata = appMetaData;

type LayoutProps = Readonly<{
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
