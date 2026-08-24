import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

export const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500","600","700"],
  variable: "--font-heading",
});

export const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});
export const metadata: Metadata = {
  title: "Serzameen Estates",
  description: "Premium real estate discovery experience built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className={`min-h-full flex flex-col bg-slate-50 text-slate-900 ${heading.variable} ${body.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
