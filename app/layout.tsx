import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "叱咤武林 - 金庸武侠小说介绍",
  description: "金庸武侠小说介绍",
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
        <meta name="robots" content="all" />
        <meta name="description" content="金庸武侠小说介绍" />
        <meta name="keywords" content="wuxia, pw-wuxia, pw, 武侠, 武侠小说" />
        <link rel="canonical" href="https://pw-wuxia.vercel.app/" />
      </head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BNG35Y4MNK"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BNG35Y4MNK');
    `,
        }}
      />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
