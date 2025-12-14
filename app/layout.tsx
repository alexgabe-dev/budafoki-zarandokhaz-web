import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Budafoki Zarándokház | Bár & Szálláshely",
  description:
    "Egy hely, ahol a hit és a ház bora közös misére gyűlnek. Vallásos tematikájú bár és zarándok-szálláshely Budafokon.",
  keywords: ["zarándokház", "budafok", "bár", "szálláshely", "étterem", "rendezvény", "wellness"],
  icons: {
    icon: [
      { url: "/favicons/favicon.ico" },
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96" },
    ],
    apple: "/favicons/apple-touch-icon.png",
    shortcut: "/favicons/favicon.ico",
  },
  manifest: "/favicons/site.webmanifest",
  openGraph: {
    title: "Budafoki Zarándokház",
    description: "Ahol a hit és a ház bora közös misére gyűlnek.",
    type: "website",
  }
}

export const viewport: Viewport = {
  themeColor: "#1a1a1f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
