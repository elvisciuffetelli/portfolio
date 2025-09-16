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
      <body className={`${inter.className} antialiased min-h-screen bg-white dark:bg-gray-900`}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
