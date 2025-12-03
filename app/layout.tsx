import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Colors4dev — Color Scale Generator for Developers",
    template: "%s | Colors4dev",
  },
  description:
    "Generate accessible color palettes and scales instantly. Export to CSS variables, Tailwind, and SCSS. Built-in WCAG contrast checker and color blindness simulator.",
  keywords: [
    "color palette generator",
    "color scale generator",
    "tailwind colors",
    "css color variables",
    "wcag contrast checker",
    "accessible colors",
    "design tokens",
    "color blindness simulator",
    "hex to rgb",
    "oklch colors",
    "developer tools",
    "design system colors",
  ],
  authors: [{ name: "hxst1" }],
  creator: "hxst1",
  publisher: "Colors4dev",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://colors4dev.vercel.app/",
    siteName: "Colors4dev",
    title: "Colors4dev — Color Scale Generator for Developers",
    description:
      "Generate accessible color palettes instantly. Export to CSS, Tailwind & SCSS with built-in WCAG contrast checker.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Colors4dev - Generate accessible color scales for your design system",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Colors4dev — Color Scale Generator for Developers",
    description:
      "Generate accessible color palettes instantly. Export to CSS, Tailwind & SCSS with built-in WCAG contrast checker.",
    images: ["/og-image.png"],
    creator: "@hxst1",
  },
  alternates: {
    canonical: "https://colors4dev.vercel.app/",
  },
  category: "Developer Tools",
  classification: "Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}