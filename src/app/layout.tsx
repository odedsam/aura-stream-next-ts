import "./globals.css";
import { Toaster } from "@/app/components/ui/toaster";
import { appMetaData, geistSans, geistMono } from "@/config/appConfig";
import { AppHeader } from "./layouts/AppHeader";
import Footer from "./layouts/partials/Footer";

export const metadata = appMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}>
        <AppHeader />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
