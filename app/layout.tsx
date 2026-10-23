import type { Metadata } from "next";
import "./globals.css";

// TODO 1: เปลี่ยนชื่อและคำอธิบาย (แสดงบนแท็บเบราว์เซอร์และตอนแชร์ลิงก์)
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My first website built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">{children}</body>
    </html>
  );
}
