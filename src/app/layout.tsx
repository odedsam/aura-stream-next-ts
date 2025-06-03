import './globals.css';
import { Toaster } from '@/app/components/ui/toaster';
import { appMetaData, geistSans, geistMono, manrope } from '@/config/appConfig';
import AppHeader from './layouts/AppHeader';
import AppFooter from './layouts/AppFooter';

export const metadata = appMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${manrope.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}>
        <AppHeader />
        <main className="flex-grow bg-primary">{children}</main>
        <AppFooter />
        <Toaster />
      </body>
    </html>
  );
}
