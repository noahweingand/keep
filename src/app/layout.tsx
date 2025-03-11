import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Keep",
  description: "keep.band",
  keywords: "Keep, band, music, shoegaze",
  twitter: {
    site: "@KeepVA",
    card: "summary_large_image",
    title: "Keep",
    description: "Keep",
  },
  openGraph: {
    siteName: "Keep",
    url: "https://keep.band",
    title: "Keep",
    type: "website",
    description: "Keep",
    // TODO: image url, secure url, width, height
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black overflow-x-hidden">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/keepelf_black.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
