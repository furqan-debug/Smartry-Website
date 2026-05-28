'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#platform' },
  { label: 'Industries', href: '#industries' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Security', href: '#security' },

  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-200' : 'bg-white border-b border-slate-100'
        }`}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center flex-shrink-0">
              <span className="text-xl font-bold text-slate-900 tracking-tight">Smartry</span>
            </a>

            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-150">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a href="mailto:hello@smartry.io" className="btn-accent py-2 px-5 text-sm">Contact Us</a>
            </div>

            <button id="mobile-menu-toggle" aria-label="Toggle mobile menu" aria-expanded={mobileOpen}
              className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div id="mobile-menu"
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-slate-200 shadow-lg lg:hidden">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-100">
                <a href="mailto:hello@smartry.io" className="btn-accent text-sm justify-center">Contact Us</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
