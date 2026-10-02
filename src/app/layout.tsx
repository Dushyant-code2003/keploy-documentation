import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zero-Code Testing in Go with Keploy: The Echo & Postgres Hands-On Guide",
  description:
    "A step-by-step developer tutorial on recording API traffic, generating zero-maintenance mocks, and running tests without a live database using Keploy.",
  keywords: ["Keploy", "Go", "Echo", "PostgreSQL", "eBPF", "API Testing", "Zero-Code Mocks", "DevRel", "Next.js"],
  authors: [{ name: "Dushyant Patel" }],
  openGraph: {
    title: "Zero-Code Testing in Go with Keploy: The Echo & Postgres Hands-On Guide",
    description: "Learn how to record e2e test cases and mock PostgreSQL dependencies automatically with Keploy.",
    type: "article",
  },
  icons: {
    icon: [
      { url: "/keploy-logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/keploy-logo.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F4] dark:bg-[#141311] text-[#1D1B18] dark:text-[#FAF8F4] transition-colors selection:bg-[#B89B6A]/30">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
