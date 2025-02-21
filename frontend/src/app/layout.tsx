import "./globals.css";
import Footer from "./footer";
import type { Metadata } from "next";
import Header from "./header/header";
import MenuDisplay from "./header/md-menu";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "./contexts/auth.context";

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
  description: "Price-lock Stores - Pharmacy - Homecare Specialists - Consultancy Services - Pheonix Meds. All in one Medical center with Nurses and Doctors on call",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
          <Header />
          <MenuDisplay />
          {children}
          <Footer /> 
        </AuthProvider>   
      </body>
    </html>
  );
}
