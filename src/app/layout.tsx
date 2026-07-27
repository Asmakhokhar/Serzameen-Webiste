import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
