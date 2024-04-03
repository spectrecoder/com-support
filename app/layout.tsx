import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({ subsets: ["latin"],
weight:['100',"200","300" , "500" , "600" , "700" , "800" , "900"] });

export const metadata: Metadata = {
  title: "HelpAi | Your Learning AI",
  description: "Platform where you can access multiple ai helpers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      <Analytics /></body>
    </html>
  );
}
