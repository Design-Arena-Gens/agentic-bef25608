import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google'
import clsx from 'clsx'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair',
  display: 'swap'
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400','500'],
  variable: '--font-inter',
  display: 'swap'
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Jeshua David ? Video Editor & Visual Storyteller",
  description: "Editorial portfolio blending cinematic typography with interactive 3D.",
  themeColor: "#050505"
}

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, playfair.variable, jetbrains.variable, "bg-background text-textPrimary antialiased")}> 
        {children}
      </body>
    </html>
  )
}
