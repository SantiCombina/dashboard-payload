import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for your app",
  keywords: ["dashboard", "app", "react"],
  icons: [
    {
      url: "/favicon.svg",
      media: "(prefers-color-scheme: light)",
    },
    {
      url: "/favicon.svg",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={cn("bg-white text-black flex min-h-screen", inter.className)}
      >
        <Sidebar />
        <div className="w-full p-8">{children}</div>
      </body>
    </html>
  );
}
