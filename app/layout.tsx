import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Akemnoor Singh",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className="bg-[#111111]">
        {children}
      </body>
    </html>
  );
}
