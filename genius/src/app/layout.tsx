import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { ToasterProvider } from "@/components/toaster-provider";
import { ModalProvider } from "@/components/modal-provider";
import { CrispProvider } from "@/components/crisp-provider";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genius",
  description: "AI SaaS Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("bg-secondary", font.className)}>
          <CrispProvider />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ToasterProvider />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
