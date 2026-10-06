import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import headshot from "@/app/ui/icons/Headshot.jpg";
import { siteUrl } from "./site-url";
import "./globals.css";
import NavBar from "./ui/navbar";
 


const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Home | Edward Vale',
    template: '%s | Edward Vale',
  },
  description:
    'Edward Vale is a First-Class Computer Science graduate from Lancaster University, sharing software projects and seeking opportunities to contribute to a team.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    siteName: 'Edward Vale',
    locale: 'en_GB',
    title: 'Edward Vale | Computer Science Graduate & Developer',
    description:
      'First-Class Computer Science graduate from Lancaster University, sharing software projects and seeking opportunities to contribute to a team.',
    images: [
      {
        url: headshot.src,
        alt: 'Edward Vale',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Edward Vale | Computer Science Graduate & Developer',
    description:
      'First-Class Computer Science graduate from Lancaster University, sharing software projects and seeking opportunities to contribute to a team.',
    images: [headshot.src],
  },
  icons: {
    icon: [{ url: headshot.src, rel: 'icon' }],
    shortcut: [{ url: headshot.src, rel: 'shortcut icon' }],
    apple: [{ url: headshot.src, rel: 'apple-touch-icon' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} min-h-screen bg-page font-sans`}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
