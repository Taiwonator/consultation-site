'use client';

import { useContext } from "react";
import { Inter } from "next/font/google";
import { AppContext } from '@/app/context/AppContext'
import Navigation from "@/app/components/Structure/Navigation";
import SiteContainer from "@/app/components/Structure/SiteContainer";
import Footer from "@/app/components/Structure/Footer";
import cx from 'classnames'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const context = useContext(AppContext)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <SiteContainer>
          {children}
        </SiteContainer>
        <Footer />
      </body>
    </html>
  );
}
