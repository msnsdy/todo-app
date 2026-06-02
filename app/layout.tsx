import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="jp"
      className={`${notoSansJp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex font-sans flex-col">{children}</body>
    </html>
  );
}
