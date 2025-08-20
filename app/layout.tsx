import type { Metadata } from "next";
import "./globals.css";
import { Inter, Instrument_Serif } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akemnoor Singh",
  description: "Software Developer & Freelancer",
  openGraph: {
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Akemnoor Singh - Software Developer & Freelancer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
