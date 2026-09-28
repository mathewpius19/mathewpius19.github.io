import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Mathew Pius Olickal | Software Engineer',
  description: 'Building scalable backend systems and exploring how AI can be integrated into reliable production software.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jetbrains.variable}`}>
      <body className="font-mono min-h-screen antialiased bg-[#111111] text-[#f0f0f0] scanline">
        {children}
      </body>
    </html>
  )
}
