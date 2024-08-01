import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { template: "%s | Next Movies", default: "Loading..." },
  description: "The best movies on the best framework",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        11111
      </body>
    </html>
  );
}
