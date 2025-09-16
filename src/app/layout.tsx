import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Elvis Ciuffetelli | Frontend Developer",
  description: "Personal portfolio of Elvis Ciuffetelli - Frontend Developer specializing in React, Next.js, and modern web technologies",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Elvis Ciuffetelli" }],
  creator: "Elvis Ciuffetelli",
  openGraph: {
    title: "Elvis Ciuffetelli | Frontend Developer",
    description: "Personal portfolio showcasing web development expertise and projects",
    url: "https://elvisciuffetelli.dev",
    siteName: "Elvis Ciuffetelli Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvis Ciuffetelli | Frontend Developer",
    description: "Personal portfolio showcasing web development expertise and projects",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900`}>
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
      </body>
    </html>
  );
}
