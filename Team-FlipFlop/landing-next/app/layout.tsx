import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KnowledgeBase Pro - Your AI-Powered Knowledge Assistant',
  description: 'Unlock the power of your data with advanced RAG technology. Chat with your documents, Figma designs, and Slack conversations in one intelligent interface.',
  keywords: ['RAG technology', 'AI knowledge assistant', 'document chat', 'Figma integration', 'Slack search', 'vector search', 'knowledge management'],
  openGraph: {
    title: 'KnowledgeBase Pro - Your AI-Powered Knowledge Assistant',
    description: 'Advanced RAG technology with Gemini AI for precise, contextual responses. Connect documents, Figma, and Slack.',
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
