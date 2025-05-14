import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KOI Event - Unutulmaz Organizasyonlar",
  description:
    "KOI Event, üniversite yıllarından gelen tecrübeyle partiler, konferanslar ve eğlence etkinlikleri düzenleyen bir organizasyon topluluğudur.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
