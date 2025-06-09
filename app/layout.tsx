import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nidhi's portfolio",
  description: "Created with Vercel",
  generator: "nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
