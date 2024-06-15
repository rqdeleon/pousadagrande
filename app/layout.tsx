import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

import WebChat from "@/hooks/3x";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pousada Grande Staycation",
  description: "Best Staycation on Paranaque, Manila!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" className="md:scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="lightr"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <WebChat />
        <Toaster />
      </body>
    </html>
  );
}
