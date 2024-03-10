import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "叱咤武林",
  description: "武侠小说介绍",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="RLU1BTgCMIs6Q9VnSVZ7hnasZ1gbyQ0wIV972SRdx_k"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
