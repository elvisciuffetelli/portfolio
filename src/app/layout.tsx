import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { ResponsiveScrollProgress } from "@/components/ui/ResponsiveScrollProgress";
import { StructuredData } from "@/components/seo/StructuredData";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { generateMetadata, generateViewport } from "@/utils/metadata";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = generateMetadata();
export const viewport: Viewport = generateViewport();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <StructuredData type="both" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900`}>
        <ThemeProvider defaultTheme="light">
          <ResponsiveScrollProgress />
          <Navigation />
          <main className="pt-16 relative">
            {/* Background decorative elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
              <div className="absolute top-1/4 -right-64 w-96 h-96 bg-gradient-to-l from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-pulse-slow"></div>
              <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-pulse-slow"></div>
            </div>
            <div className="relative z-10">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
