import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MO Exam - Learn Without Limits",
  description:
    "Master new skills with expert-led courses. Join thousands of students learning at their own pace with MO Exam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${outfit.className} min-h-full`}>{children}</body>
    </html>
  );
}
