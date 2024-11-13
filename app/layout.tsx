import type { Metadata } from "next";
import localFont from "next/font/local";
import {IBM_Plex_Serif, Inter} from "next/font/google";
import "./globals.css";
import { Weight } from "lucide-react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const inter = Inter({subsets:["latin"],variable:'--font-inter'})
const imbPlexSerif= IBM_Plex_Serif({
  subsets :['latin'],
  weight:['400','700'],
  variable: '--font-ibm-plex-serif'

})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform for everyone",
  icons:{
    icon:'/icon/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${imbPlexSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
