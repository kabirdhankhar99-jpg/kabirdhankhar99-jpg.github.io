import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kabir Dhankhar",
  description: "Product · Engineering · AI",
  openGraph: {
    title: "Kabir Dhankhar",
    description: "Building products at the intersection of AI, engineering, and design.",
    url: "https://kabirdhankhar99-jpg.github.io",
    siteName: "Kabir Dhankhar",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-white dark:bg-zinc-950 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
