import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TeamMemory - Your Team\'s AI-Powered Memory',
  description: 'Never lose track of decisions, discussions, and important details across Slack, email, meetings, and docs.',
  keywords: ['AI memory', 'team collaboration', 'decision tracking', 'knowledge management'],
  openGraph: {
    title: 'TeamMemory - Your Team\'s AI-Powered Memory',
    description: 'Never lose track of decisions, discussions, and important details. Join 500+ teams saving 10hrs/week.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
