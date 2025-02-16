import "./globals.css";
import type { Metadata } from "next";
import Header from "./header/header";
import MenuDisplay from "./header/md-menu";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pheonix Medicals",
  description: "Price-lock Pharmacy Store - Care & Consultancy Services - Pheonix Meds. All in one Medical center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <MenuDisplay />
        {children}
      </body>
    </html>
  );
}
