import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CultureFit - カルチャー診断ツール",
  description: "30問の診断で、あなたの価値観にマッチする企業文化を8つの軸で可視化します",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-[#F5F7FA]">{children}</body>
    </html>
  );
}
