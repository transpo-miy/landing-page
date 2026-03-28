import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const calistoga = Calistoga({
  variable: "--font-calistoga",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Transpo | Music, your way.",
  description: "Transpo detects the key of any audio in real time — so your music adapts to you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${calistoga.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground scroll-smooth">{children}</body>
    </html>
  );
}
