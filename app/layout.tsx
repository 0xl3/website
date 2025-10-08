import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "0xL3 — Beyond Transactions, Building Trust",
  description:
    "Layer 3 blockchain powered by Optimism Rollup. Unparalleled scalability, security, and efficiency.",
  generator: "v0.app",
  metadataBase: new URL("https://0xl3.com"),
  openGraph: {
    title: "0xL3 — Beyond Transactions, Building Trust",
    description:
      "Layer 3 blockchain powered by Optimism Rollup. Unparalleled scalability, security, and efficiency.",
    url: "https://0xl3.com",
    siteName: "0xL3 Chain",
    images: [
      {
        url: "/0xl3-logo.svg",
        width: 1200,
        height: 630,
        alt: "0xL3 Logo",
      },
      {
        url: "/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "0xL3 Logo Fallback",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "0xL3 — Beyond Transactions, Building Trust",
    description:
      "Layer 3 blockchain powered by Optimism Rollup. Unparalleled scalability, security, and efficiency.",
    images: ["/0xl3-logo.svg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
