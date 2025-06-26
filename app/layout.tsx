import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ViewTransitions} from "next-view-transitions";
import Header from "@/components/global/header";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Restika",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <ViewTransitions>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] text-slate-50 antialiased`}
          >
          <Header/>
          <main className="w-screen h-full relative">
            {children}
          </main>
          </body>
        </html>
      </ViewTransitions>
  );
}
