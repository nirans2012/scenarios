import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FP&A Copilot',
  description: 'AI-ready financial planning and what-if scenario analysis'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
