import type { Metadata, Viewport } from "next";
import { Geist, Sedgwick_Ave_Display } from "next/font/google";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sedgwick = Sedgwick_Ave_Display({
  variable: "--font-sedgwick",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  ...(siteConfig.siteUrl && {
    metadataBase: new URL(siteConfig.siteUrl),
    alternates: { canonical: "/" },
  }),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${sedgwick.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
