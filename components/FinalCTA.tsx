'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(37,99,255,0.15) 0%, rgba(7,27,59,0.8) 40%, rgba(37,99,255,0.1) 100%)',
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(37,99,255,0.18) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/10 mb-8">
            <span className="text-xs font-bold text-electric-400 tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
              Trusted by operational teams globally
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-soft-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Transform workforce coordination{' '}
            <span className="gradient-text">with AI</span>
          </h2>

          {/* Sub */}
          <p className="text-xl text-muted-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Improve operational efficiency, reduce delays, and gain complete operational visibility
            with Smartry.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="final-cta-demo"
              href="#pricing"
              className="btn-outline flex items-center gap-2 text-base px-7 py-3.5"
            >
              <Play className="w-4 h-4" />
              Book a Demo
            </a>
            <a
              id="final-cta-trial"
              href="#pricing"
              className="btn-electric flex items-center gap-2 text-base px-7 py-3.5"
            >
              <span className="relative z-10">Start Free Trial</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </a>
          </div>

          {/* Fine print */}
          <p className="text-sm text-muted mt-6">
            No credit card required. Free trial available on all plans.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
