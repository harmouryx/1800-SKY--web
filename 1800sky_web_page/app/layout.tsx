import type { Metadata } from "next";
import { DotGothic16, Geist, Geist_Mono, Noto_Serif } from "next/font/google";
import "./globals.css";

const dotGothic16 = DotGothic16({
  weight: "400",
  variable: "--font-dotgothic16",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  weight: "400",
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "1800sky*-Web-Page",
  description: "portfolio web page for 1800sky*",
  viewport: "width=device-width, initial-scale=1",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dotGothic16.variable} ${notoSerif.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
