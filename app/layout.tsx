import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AI液冷产业知识库｜全球情报，中国与广东重点",
  description: "面向个人学习与业务判断的AI液冷产业知识库，持续追踪技术、市场、企业、产品、财报、政策标准与制造机会。",
  openGraph: {
    title: "AI液冷产业知识库",
    description: "全球情报 · 中国与广东重点",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "AI液冷产业知识库" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI液冷产业知识库",
    description: "全球情报 · 中国与广东重点",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
