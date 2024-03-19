import type { Metadata } from "next";
import {Prompt } from "next/font/google";
import "./globals.css";
import GlobalNavBar from "@/components/GlobalNavBar";


const prompt = Prompt({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin', 'thai', 'latin-ext']
})

export const metadata: Metadata = {
  title: "Campground",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={prompt.className}>
        <GlobalNavBar/>
        {children}
        </body>
    </html>
  );
}
