import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "CMJ Aguachica - Juventud que decide, futuro que construye",
  description:
    "Campaña para el Consejo Municipal de Juventud de Aguachica. Únete al cambio que nuestra juventud necesita.",
  keywords: "CMJ, Aguachica, juventud, consejo municipal, elecciones, jóvenes",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable} antialiased`}>
      <body className="min-h-screen bg-background font-sans">{children}</body>
    </html>
  )
}
