import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors">
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
