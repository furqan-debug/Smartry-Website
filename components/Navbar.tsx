'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#platform' },
  { label: 'Industries', href: '#industries' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Security', href: '#security' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-2xl border-b border-border shadow-2xl shadow-navy/50'
            : 'bg-transparent'
        }`}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-electric rounded-lg rotate-12 group-hover:rotate-6 transition-transform duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white relative z-10" strokeWidth={2.5} />
                </div>
              </div>
              <span className="text-xl font-bold text-soft-white tracking-tight">
                Smart<span className="text-electric">ry</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-muted-400 hover:text-soft-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="#pricing" className="btn-outline text-sm py-2 px-5">
                Book Demo
              </a>
              <a href="#pricing" className="btn-electric text-sm py-2 px-5 relative z-10">
                <span className="relative z-10">Start Free Trial</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
              className="lg:hidden p-2 rounded-lg text-muted-400 hover:text-soft-white hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-navy/98 backdrop-blur-2xl border-b border-border shadow-2xl lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-400 hover:text-soft-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                <a href="#pricing" className="btn-outline text-sm text-center">
                  Book Demo
                </a>
                <a href="#pricing" className="btn-electric text-sm text-center relative">
                  <span className="relative z-10">Start Free Trial</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
