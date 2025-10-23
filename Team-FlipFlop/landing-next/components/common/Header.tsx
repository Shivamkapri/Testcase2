'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition focus:outline-none focus:ring-2 focus:ring-blue-500/30 rounded">
              TeamMemory
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="#features" className="text-slate-700 hover:text-primary font-medium transition">
              Features
            </Link>
            <Link href="#pricing" className="text-slate-700 hover:text-primary font-medium transition">
              Pricing
            </Link>
            <Link href="#faq" className="text-slate-700 hover:text-primary font-medium transition">
              FAQ
            </Link>
            <Link href="https://docs.maas.ai" className="text-slate-700 hover:text-primary font-medium transition">
              Docs
            </Link>
            <Link href="#" className="text-slate-700 hover:text-primary font-medium transition">
              Login
            </Link>
            <Link 
              href="#" 
              className="px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition shadow-sm"
            >
              Get Started →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary/30"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-0.5 w-full bg-slate-700 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-full bg-slate-700 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-slate-700 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-slate-200 bg-white">
            <Link 
              href="#features" 
              className="block text-slate-700 hover:text-primary font-medium py-3 px-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className="block text-slate-700 hover:text-primary font-medium py-3 px-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#faq" 
              className="block text-slate-700 hover:text-primary font-medium py-3 px-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="https://docs.maas.ai" 
              className="block text-slate-700 hover:text-primary font-medium py-3 px-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs
            </Link>
            <Link 
              href="#" 
              className="block text-slate-700 hover:text-primary font-medium py-3 px-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              href="#" 
              className="block w-full text-center px-5 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started →
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
