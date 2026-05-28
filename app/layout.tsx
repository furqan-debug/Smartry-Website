import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Smartry — AI-Powered Workforce Coordination Platform",
  description:
    "Smartry helps hotels, hospitals, restaurants, and operational teams automate task coordination, optimize workforce response times, and manage daily operations through one intelligent platform.",
  keywords: [
    "workforce coordination",
    "AI operations",
    "operational intelligence",
    "task management",
    "hospitality software",
    "service workflow automation",
    "intelligent task allocation",
    "real-time coordination",
  ],
  openGraph: {
    title: "Smartry — AI-Powered Workforce Coordination",
    description:
      "Automate task coordination, optimize workforce response times, and gain complete operational visibility with Smartry.",
    type: "website",
    locale: "en_US",
    siteName: "Smartry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smartry — AI-Powered Workforce Coordination",
    description:
      "Automate task coordination and optimize workforce response times with Smartry.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
