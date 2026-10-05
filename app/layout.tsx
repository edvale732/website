import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import headshot from "@/app/ui/icons/Headshot.jpg";
import "./globals.css";
import NavBar from "./ui/navbar";
 


const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? 'https://edwardvale.co.uk';

export const metadata: Metadata = {
  title: {
    default: 'Home | Edward Vale',
    template: '%s | Edward Vale',
  },
  description: 'Portfolio website of Edward Vale',
  metadataBase: new URL(siteUrl),
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
